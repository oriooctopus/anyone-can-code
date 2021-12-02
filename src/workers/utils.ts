import { removeJSComments } from '../utils/curriculum-helpers';

type consoleLogOverride = (data: any[]) => void;

export const overrideConsoleLog = (override: consoleLogOverride) => {
  // @ts-ignore
  console.standardLog = console.log;
  console.log = (...data: any[]) => {
    override(data);
    // @ts-ignore
    console.standardLog.apply(console, data);
  };
};

export const restoreConsoleLog = () => {
  // @ts-ignore
  if (!console.standardLog) {
    throw new Error(
      'Attempted to restore console.log but it has never been overwritten',
    );
  }

  // @ts-ignore
  console.log = console.standardLog;
};

const getCodeEvaluationHelpers = (logs: Array<Array<unknown>>) => {
  const helpers = {
    // right now this only works with primitives
    wasLoggedToConsole: (val: unknown) => {
      return logs.some((logGroup) => logGroup.some((log) => log === val));
    },
    removeWhitespace: (string: string, i = 0, res = ''): string => {
      if (i >= string.length) return res;
      else if (string[i] == ' ')
        return helpers.removeWhitespace(string, i + 1, res);
      else return helpers.removeWhitespace(string, i + 1, (res += string[i]));
    },
  };
  return helpers;
};

export const getEvaluationContext = (
  code: string,
  logs?: Array<Array<unknown>>,
) => {
  return {
    _codeEvaluationHelpers: getCodeEvaluationHelpers(logs),
    _codeString: `${code}`,
    _internalLogs: logs,
  };
};

export const getCode = (code = '', removeComments: boolean) =>
  removeComments ? removeJSComments(code) : code;

export const getConsoleLogsFromCodeEvaluation = (
  code: string,
): Array<string> => {
  const context = getEvaluationContext(code);
  const logs = [] as Array<string>;

  overrideConsoleLog((...args) => {
    logs.push(args.toString());
    // @ts-ignore
    console.standardLog('args', ...args);
  });
  try {
    evaluateWithContext(
      `
    ${code};
  `,
      context,
    );
  } catch (e) {
    logs.push(e.toString());
  }

  restoreConsoleLog();
  return logs;
};

// TODO: type context
export const evaluateWithContext = (code: string, context = {}) => {
  return function evaluateEval() {
    const contextStr = Object.keys(context)
      .map((key) => `${key} = this.${key}`)
      .join(',');
    const contextDef = contextStr ? `let ${contextStr};` : '';

    const evalString = `${contextDef}${code}`;

    const result = eval(evalString);
    return result;
  }.call(context);
};

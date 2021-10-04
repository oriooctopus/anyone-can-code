import { currentLogVar } from 'src/cache';
import curriculumHelpers, {
  removeJSComments,
} from '../utils/curriculum-helpers';

type consoleLogOverride = (data: any[]) => void;

export const overrideConsoleLog = (override: consoleLogOverride) => {
  console.standardLog = console.log;
  console.log = (...data: any[]) => {
    override(data);
    console.standardLog.apply(console, data);
  };
};

export const restoreConsoleLog = () => {
  if (!console.standardLog) {
    throw new Error(
      'Attempted to restore console.log but it has never been overwritten',
    );
  }

  console.log = console.standardLog;
};

const _codeEvaluationHelpers = {
  removeWhitespace: (string, i = 0, res = '') => {
    if (i >= string.length) return res;
    else if (string[i] == ' ')
      return _codeEvaluationHelpers.removeWhitespace(string, i + 1, res);
    else
      return _codeEvaluationHelpers.removeWhitespace(
        string,
        i + 1,
        (res += string[i]),
      );
  },
};

export const getEvaluationContext = (code: string) => {
  return {
    _codeEvaluationHelpers,
    _codeString: `${code}`,
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

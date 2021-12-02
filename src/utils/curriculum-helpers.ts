// @ts-ignore
import strip from '@freecodecamp/strip-comments';

const removeHtmlComments = (str: string): string =>
  str.replace(/<!--[\s\S]*?(-->|$)/g, '');

const removeCssComments = (str: string): string =>
  str.replace(/\/\*[\s\S]+?\*\//g, '');

export const removeJSComments = (codeStr: string): string => {
  // TODO: publish type declarations and reenable eslint
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return strip(codeStr) as string;
  } catch (err) {
    return codeStr;
  }
};

const removeWhiteSpace = (str = ''): string => {
  return str.replace(/\s/g, '');
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escapeRegExp(exp: string): string {
  return exp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace,
};

export default curriculumHelpers;

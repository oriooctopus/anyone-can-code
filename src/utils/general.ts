import { renderToStaticMarkup } from 'react-dom/server';

// you have to call the inner part and access it
// and actually you'll have to go through every key too

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encodeToBase64String = (value: any): string =>
  btoa(JSON.stringify(value));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decodeBase64String = (base64String: string): any =>
  JSON.parse(atob(base64String));

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const isExternalURL = (url: string) => {
  if (typeof location === 'undefined') {
    return true;
  }

  const domain = function (url: string) {
    return url.replace('http://', '').replace('https://', '').split('/')[0];
  };

  return domain(location.href) !== domain(url);
};

export const renderSvgToCss = (svg: React.ReactElement) => {
  const staticMarkupSvg = renderToStaticMarkup(svg).replace(/"/g, "'");
  return `url("data:image/svg+xml; utf8, ${staticMarkupSvg}")`;
};

// to be passed into filter
export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encodeToBase64String = (value: any): string =>
  btoa(JSON.stringify(value));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decodeBase64String = (base64String: string): any =>
  JSON.parse(atob(base64String));

export const objMap = (obj, func) => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => func(k, v)));
};

export const isExternalURL = (url: string) => {
  if (typeof location === 'undefined') {
    return true;
  }

  var domain = function (url: string) {
    return url.replace('http://', '').replace('https://', '').split('/')[0];
  };

  return domain(location.href) !== domain(url);
};

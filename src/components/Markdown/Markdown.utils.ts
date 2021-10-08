export const stripNewlines = (val: React.ReactNode) =>
  String(val).replace(/\n$/, '');

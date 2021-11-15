export type TTestResult = {
  pass: boolean;
  internalTest: string;
  label: string;
  error?: string;
  stack?: string;
};

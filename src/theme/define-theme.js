const defineTheme = (monaco, theme) => {
  return new Promise((res) => {
    import(`monaco-themes/themes/${theme}.json`).then((themeData) => {
      console.log('yoyo', themeData.default);
      monaco.editor.defineTheme('all-hallows-eve', themeData.default);
      res();
    });
  });
};

export default defineTheme;

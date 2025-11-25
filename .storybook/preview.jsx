export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: { source: { language: 'html' } },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
    }
  }
};

module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        toolbars: {
          viewport: { hidden: false },
        }
      }
    },
    '@whitespace/storybook-addon-html'
  ],
  managerHead: (head) => `
    ${head}
    <base href="/" />
    <style>
      /* HTML addon styling - override emotion styles */
      #storybook-panel-root [data-lang],
      #storybook-panel-root .css-rz1y00 {
        margin: 8px !important;
        position: relative !important;
      }
      #storybook-panel-root [data-lang] button,
      #storybook-panel-root .css-rz1y00 button,
      #storybook-panel-root button[title="Copy to clipboard"] {
        position: absolute !important;
        top: 8px !important;
        right: 8px !important;
        z-index: 10 !important;
        margin: 0 !important;
      }
      
      /* Reorder toolbar items - viewport before color scheme */
      [data-parent-id="storybook-preview-wrapper"] {
        display: flex !important;
      }
      /* Target the color scheme button and move it after viewport */
      button[title*="Switch to"] {
        order: 10 !important;
      }
      /* Viewport button */
      button[title*="Change the size of the preview"] {
        order: 9 !important;
      }
    </style>
  `,
  previewHead: (head) => `
    ${head}
    <base href="/" />
  `,
  viteFinal: (config) => {
    config.base = '/';
    return config;
  },
  staticDirs: [{ from: '../public', to: '/' }]
};

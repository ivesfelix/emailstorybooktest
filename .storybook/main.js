module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  managerHead: (head) => `
    ${head}
    <base href="${process.env.BASE_PATH || '/'}" />
  `,
  viteFinal: (config) => {
    config.base = process.env.BASE_PATH || '/';
    return config;
  }
};

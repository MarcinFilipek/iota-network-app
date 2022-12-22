const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (webpackConfig) => {
    const cssRules = webpackConfig.module.rules.find((rule) => {
      if (rule.test === undefined) {
        return false;
      }
      return rule.test.toString() === "/\\.css$/";
    });
    // Remove the existing css rule
    webpackConfig.module.rules = webpackConfig.module.rules.filter((rule) => {
      if (rule.test === undefined) {
        return true;
      }
      return rule.test.toString() !== "/\\.css$/";
    });

    const cssLoader = cssRules.use.find(
      (e) => e.loader.search("css-loader") > -1
    );
    if (cssLoader) {
      cssLoader.options = {
        modules: true,
      };
    }
    webpackConfig.module.rules.push({ ...cssRules, test: "/\\.css$/" });
    return webpackConfig;
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

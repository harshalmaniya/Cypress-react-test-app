const { defineConfig } = require("cypress");
const component= {
  devServer: {
    framework: 'next',
    bundler: 'webpack',
  },
}
module.exports = defineConfig({
  component: component
});

const { injectBabelPlugin } = require('react-app-rewired');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config, env);
  config = rewireSvgReactLoader(config, env)
  return config;
};
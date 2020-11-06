const path = require("path");
const webpack = require("webpack");
const { shimFile } = require("./scripts/shim");
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

shimFile(
  resolvePath(
    "./node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js"
  ),
  [
    {
      from: 148,
      to: 158,
      value: "",
    },
  ]
);
const srcIncludes = [
  // resolvePath('src'),
  resolvePath("./src"),
];
// const appDirectory = fs.realpathSync(process.cwd())
// our packages that will now be included in the CRA build step
const appIncludes = [
  ...srcIncludes,
  resolvePath("./node_modules/react-native-gesture-handler"),
];

module.exports = function override(config, env) {
  const __DEV__ = env !== "production";

  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
  );

  config.module.rules[0].include = appIncludes;

  config.module.rules[1].oneOf[2].include = appIncludes;

  config.plugins.push(new webpack.DefinePlugin({ __DEV__ }));
  return config;
};

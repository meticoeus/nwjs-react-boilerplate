const DEFAULT_CONFIG = {};

const SERVER_CONFIG = {
  PORT: 8081                 //local dev server port
};

const PATH_CONFIG = {
  MAIN: 'src',               // app entry dir
  OUTPUT: 'build'            // app output dir
};

const RESOLVE_CONFIG = {
  EXTENSIONS: ['.js', '.json'],    //webpck extensions
  ALIAS: {}                          //webpck alias
};

module.exports = {
  DEFAULT_CONFIG,
  PATH_CONFIG,
  RESOLVE_CONFIG,
  SERVER_CONFIG
};

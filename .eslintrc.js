// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  "extends": "eslint:recommended",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  "rules": {
    "semi": 0,
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "no-console": 0,
    "quotes": 0,
    "keyword-spacing": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};

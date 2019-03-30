module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "expo",
    "airbnb",
    "prettier",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};

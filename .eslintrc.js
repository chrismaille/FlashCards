module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "expo",
    "airbnb",
    "prettier",
    "prettier/react",
    "react-native"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};

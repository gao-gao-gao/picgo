module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": [
      "display",
      "position",
      "float",
      "width",
      "height",
    ],
  },
};

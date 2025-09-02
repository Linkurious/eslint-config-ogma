import config from "./index.js";

export default [
  ...config,
  {
    files: ["index.js", "eslint.config.js"],
    rules: {
      "import/no-unresolved": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-duplicates": "off",
      "import/order": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
    },
  },
];

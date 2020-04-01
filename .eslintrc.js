module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "keyword-spacing": 1,
        "space-before-function-paren": [1, "never"],
        "eqeqeq": 1,
        "space-infix-ops": 1,
        "comma-spacing": 1,
        "brace-style": 1,
        "no-multiple-empty-lines": 1,
        "camelcase": 1,
        "func-call-spacing": 1,
        "key-spacing": 1,
        "semi": 1,
        "no-floating-decimal": 1,
        "no-multi-spaces": 1,
        "object-property-newline": 1,
        "padded-blocks": [1, "never"],
        "space-before-blocks": 2,
        "space-in-parens": 1,
        "spaced-comment": 1,
        "quotes": [1, "single"],
        "id-length": [1, { "exceptions": ["i", "j", "x"] }],
        "indent": ["error", "tab"],
        "no-array-constructor": 1,
    }
};
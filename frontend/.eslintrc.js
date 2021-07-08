process.chdir(__dirname);
module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        allowImportExportEverywhere: true,
        codeFrame: false,
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
        jasmine: true
    },
    extends: [
        "airbnb"
    ],
    plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
    globals: {
        fetch: "readonly"
    },
    rules: {
        "arrow-parens": 0,
        "class-methods-use-this": 0,
        "comma-dangle": ["error", "never"],
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": [
            "error", {
                devDependencies: [
                    "**/*.test.jsx",
                    "**/*.stories.js"
                ]
            }
        ],
        indent: ["error", 4],
        "jsx-a11y/anchor-has-content": 0,
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/label-has-for": "off",
        "linebreak-style": 0,
        "max-len": [
            "error", {
                code: 120,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        "no-nested-ternary": 0,
        "no-unused-expressions": ["error", { allowShortCircuit: true }],
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "no-restricted-syntax": "off",
        "no-use-before-define": 0,
        "no-script-url": 0,
        quotes: ["error", "double"],
        "react/destructuring-assignment": ["warn", "always"],
        "react/jsx-filename-extension": [
            1, {
                extensions: [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "off",
        "react/no-did-update-set-state": 0,
        "react/prop-types": [
            2, {
                ignore: [
                    "children"
                ]
            }
        ],
        semi: ["error", "always"]
    }
};

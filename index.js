module.exports = {
    extends: 'airbnb/base',
    "parser": "babel-eslint",
    "plugins": [
        "babel"
    ],
    rules: {
        indent: [2, 4],
        'comma-dangle': [2, 'never'],
        "comma-style": [
            "error",
            "first",
            { "exceptions": { "ArrayExpression": true } }
        ],
        'no-console': 0,
        'arrow-parens': 0,
        'babel/arrow-parens': [2, 'as-needed'],
        "array-bracket-spacing": [
            "error",
            "always"
        ]

    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    }
};

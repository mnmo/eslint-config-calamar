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
            "first"
        ],
        'no-console': 0,
        'arrow-parens': 0,
        'babel/arrow-parens': [2, 'as-needed']
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    }
};

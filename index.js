module.exports = {
    extends: 'airbnb/base',
    rules: {
        indent: [2, 4],
        'comma-dangle': [2, 'never'],
        'no-console': 0
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    }
};

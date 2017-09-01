module.exports = {
    "env": {
        "browser": true,
        "node": true     
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": 0,
        "strict": 0
    },
    "plugins": [
        "html"
    ],
    "parser": "babel-eslint",
};
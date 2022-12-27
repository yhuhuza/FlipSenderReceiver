module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "curly": ["warn","all"],
        "indent": ["warn", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    }
}

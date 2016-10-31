# eslint-config-mnmo

[Shareable eslint config][eslintconfig] to be used by mnmo.com.br repos.

# Usage

```bs
yarn add --dev eslint-config-mnmo
```

.eslintrc
```json
{
    "extends": "mnmo"
}
```

or, in ```package.json```, add
```json
  "eslintConfig": {
    "extends": "mnmo"
  }
```

# Changelog

- v2.0.0 - 31, October, 2016 - I'm now using comma-first,
influenced by [Elm Style Guide][elmstyle]
- v1.0.0 - 24, October, 2016 - a fork of
[eslint-config-calamar][eslint-config-calamar] which is a great base config
([airbnb] with minor adjustments)

[elmstyle]: http://elm-lang.org/docs/style-guide
[eslintconfig]: http://eslint.org/docs/developer-guide/shareable-configs
[eslint-config-calamar]: https://github.com/calamar-io/eslint-config-calamar
[airbnb]: https://github.com/airbnb/javascript

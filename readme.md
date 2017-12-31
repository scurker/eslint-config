# eslint-config-scurker

@scurker's preferred [shareable](http://eslint.org/docs/developer-guide/shareable-configs.html) ESLint config.

[![Build Status](https://travis-ci.org/scurker/eslint-config.svg?branch=master)](https://travis-ci.org/scurker/eslint-config)
[![npm](https://img.shields.io/npm/v/@scurker/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@scurker/eslint-config)

## Installation

```$ npm install --save-dev eslint @scurker/eslint-config```

## Usage

Once installed, you will need to add `@scurker` or `@scurker/eslint-config` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` file.

```
{
  "extends": ["@scurker"],
  "rules": {
    // additional rules or overrides for your project
  }
}
```
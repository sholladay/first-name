# first-name [![Build status for first-name on Circle CI.](https://img.shields.io/circleci/project/sholladay/first-name/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/first-name "First Name Builds")

> Get the first name of the user.

## Why?

 - Put a personal touch on your app with a greeting.
 - Smart user name detection, with fallbacks.
 - Handles hyphenated names.

## Install

```sh
npm install first-name --save
```

## Usage

Get it into your program.

```js
const firstName = require('first-name');
```

Get the user's first name.

```js
firstName().then((name) => {
    console.log('First name:', name);
});
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/first-name/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/first-name/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/first-name/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/first-name/blob/master/LICENSE "The license for first-name.") © [Seth Holladay](http://seth-holladay.com "Author of first-name.")

Go make something, dang it.

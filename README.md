## Simple and easy regular expression utility for node

Using npm:
```shell
$ npm i -g npm
$ npm i --save regex-easy
```
In Node.js:
```js
// Load the package
let re = require('regex-easy');
```

Usage
* Regular expression usage
```js
let r = new re.regex(pattern[string], flags[optional|string], escape[optional|boolean]);

// Methods
r.exec(string) //executes a search for a match in a string. It returns an array of information or null on a mismatch.

r.test(string) // method that tests for a match in a string. It returns true or false.
```

* Independent Methods
```js
re.escape(string); // Escaping user input that is to be treated as a literal string within a regular expression—that would otherwise be mistaken for a special character
```

### To read more about regular expressions

* [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [Eloquent Javascript](https://eloquentjavascript.net/09_regexp.html)
* [Codeburst](https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a)
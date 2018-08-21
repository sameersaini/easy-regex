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
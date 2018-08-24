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
* [Awesome Collection of Resources](https://github.com/aloisdg/awesome-regex)

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests are always welcome. For bugs and feature requests, [please create an issue](https://github.com/sameersaini/easy-regex/issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm i --save regex-easy && cd node_modules/regex-easy/ && npm test && cd ../../
```

</details>

### Author

**Sameer Saini**

Let's connect

* [LinkedIn Profile](https://www.linkedin.com/in/sameer-saini-65463079/)
* [GitHub Profile](https://github.com/sameersaini)
# array-unique-deep
Remove duplicate values from an array deeply

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save array-unique-deep
```


## Usage

```js
const unique = require('array-unique-deep');

const arr = ['a', 'b', 'c', 'c'];
console.log(unique(arr)) //=> ['a', 'b', 'c']
console.log(arr)         //=> ['a', 'b', 'c'，'c']

const objArr = [{'name':'izqcool'},{'name':'izqcool1'},{'name':'izqcool'}];
console.log(unique(objArr)) //=> [{'name':'izqcool'},{'name':'izqcool1'}]
console.log(objArr)         //=> [{'name':'izqcool'},{'name':'izqcool1'},{'name':'izqcool'}]
```


### Author
* [github/zuoq](https://github.com/zuoq)
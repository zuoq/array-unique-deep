
/*!
 * array-unique-deep <https://github.com/zuoq/array-unique-deep>
 * Licensed under the MIT License.
 */

  module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  const len = arr.length;
  let n = [];
  let json = {};
  for(let i=0;i<len;i++) {
    const type = Object.prototype.toString.call(arr[i]);
    let val;

    console.log(arr[i]);
    switch (type) {
      case '[object Object]':
        val = JSON.stringify(arr[i]);
        break;
      case '[object Array]':
        val = arr[i].toString();
        break;
      default:
        val = arr[i];
        break;
    }
    console.log(val);
    if(!json[val]) {
      json[val] = true;
      n.push(arr[i]);
    }
  }
  return n;

}
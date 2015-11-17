var curry = require('./curry');
function abc(a, b, c) {
  return a + b + c;
}

var ca = curry(abc);
var cb = ca(2);
var cc = cb(1);
var result = cc(9);
console.log(result);
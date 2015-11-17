function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length;
  return function(arg) {
    // todo:
    if (n === 1) {
      return fn(arg);
    } else {
      return curryN(fn.bind(null, arg), n - 1);
    }
  }
}

module.exports = curryN
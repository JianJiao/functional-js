function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length;
  return (function produceCurry(prevArgs) {
    return function(arg) {
      var args = prevArgs.concat(arg);
      if (args.length === n) {
        return fn.apply(this, args);
      } else {
        return produceCurry(args);
      }
    }
  })([]);
}

module.exports = curryN
// The key is that everything needs a local copy if you want to do the stop
// criteria based on that, be it the function fn or the counter.
// The function fn is also the parameter, it is the one that you passed in, so
// you can see the effects you just made on that
function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length;    // @produce a local copy
  return function(arg) {
    if (n === 1) {
      return fn(arg);
    } else {
      return curryN(fn.bind(null, arg), n - 1);   // @Intentionally set `this` to null because bind here
                                                  // doesn't accomplish that: only the first time bind is
                                                  // called will take effect, `this` cannot be rebound later
    }
  }

}

module.exports = curryN
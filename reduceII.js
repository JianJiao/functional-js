function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return (function recReduce(memo, idx) {
    if (idx >= arr.length) {
      return memo;
    }
    memo = fn.call(null, memo, arr[idx], idx, arr);
    return recReduce(memo, idx + 1);
  })(initial, 0);
}

module.exports = reduce
module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce(function build(memo, cur, idx, arr){
    var val = fn(cur);
    memo.push(val);
    return memo;
  }, []);
}
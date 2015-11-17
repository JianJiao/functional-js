function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(memo, cur, idx, arr) {
    if (memo[cur]) {
      memo[cur]++;
    } else {
      memo[cur] = 1;
    }
    return memo;
  }, {});
}

module.exports = countWords
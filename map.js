function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(function(elem, idx, arr) {
    return elem * 2;
  })
}

module.exports = doubleAll
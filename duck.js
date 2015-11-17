function duckCount() {
  // SOLUTION GOES HERE
  var args = Array.prototype.slice.call(arguments);
  ducks = args.filter(function duckFilter(item, idx, arr) {
    return Object.prototype.hasOwnProperty.call(item, 'quack');
  });
  return ducks.length;
}

module.exports = duckCount
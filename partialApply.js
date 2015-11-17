var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function partial() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(namespace);
    console.log.apply(null, args);
  }
}

module.exports = logger
function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) {
    return;
  } else {
    operation();
    return function myself() {
      repeat(operation, num - 1);
    }
  }
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  var result = fn.apply(null, args);
  if (result instanceof Function) {
    result = result();
  } else {
    return result;
  }

}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(operation, num);
}
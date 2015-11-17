function Spy(target, method) {
  // SOLUTION GOES HERE
  var self = {};
  var original = target[method];
  self.count = 0;
  target[method] = function alter() {
    self.count++;
    return original.apply(this, arguments);    // should __return__ the original return value
  }
  return self;
}

module.exports = Spy
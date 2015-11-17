function getDependencies(mod, result) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  result = result || [];    // Power of js's flexibility
  var deps = mod.dependencies || [];
  if (deps.length == 0) {
    return result;
  }
  var keys = Object.keys(deps);
  keys.forEach(function(key) {
    var dep = key + '@' + deps[key].version;
    if (result.indexOf(dep) === -1) {     //indexOf to check if it contains, could be costly
      result.push(dep);
      getDependencies(deps[key], result);
    }
  });
  return result.sort();
}

module.exports = getDependencies
function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  var deps = [];
  // @Note: you never call this function!!!
  function recursion(tree) {
    if (!tree.dependencies) {
      return;
    }
    var keys = Object.keys(tree.dependencies);
    keys.forEach(function(key, idx) {
      var dep = key + '@' + tree.dependencies[key].version;
      deps.push(dep);
      recursion(tree.dependencies[key]);
    });
  }
  recursion(tree);
  deps.sort();
  // console.log(deps);
  deps = deps.filter(function(item, idx, arr) {
    return idx === 0 || item !== arr[idx - 1];
  });
  return deps;
}

module.exports = getDependencies
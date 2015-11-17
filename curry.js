// All the intermidiate functions are all able to be called multiple times
// @Just cannot use a global array, must create local each time!!!
// @If you want to manipulate the args, you could add multiple levels of function
// abstractions
// Have a high level function to be recursively called to return functions. This is like trampoline, put
// in one function
function curryN(fn, n) {
  n = n || fn.length;
  return (function produceCurry(prevArgs) {
    return function(arg) {
      var args = prevArgs.concat(arg);
      if (args.length === n) {
        return fn.apply(this, args);
      } else {
        return produceCurry(args);
      }
    }
  })([]);
}

module.exports = curryN;





// the final function is desinged to be called many times
// function curryN(fn, n) {
//   // SOLUTION GOES HERE
//   n = n || fn.length;
//   var args = [];
//   return function recurse(arg) {
//     n--;
//     args.push(arg);
//     if (n <= 0) {
//       return fn.apply(this, args);
//     } else {
//       return function(arg) {
//         return recurse(arg);    //@The return value is a big source of bug!!!
//       };
//     }
//   };

// }

// module.exports = curryN;
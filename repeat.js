function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;
  operation();
  // Don't release control every time you finish, set a
  // threshold instead
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, num - 1);
    }, 0);
  } else {
      repeat(operation, num - 1);
  }
}

module.exports = repeat;
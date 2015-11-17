function loadUsers(userIds, load, done) {
  var count = 0;
  var users = [];
  userIds.forEach(function(userId, idx, arr) {
    load(userId, function onLoad(user) {
      count++;
      users[idx] = user;
      if (count === arr.length) {
        return done(users); // It helps to always return when you call the callback
      }
    });
  });
}

module.exports = loadUsers



// When there is a async operation, you wrap it in a function in the waterfall
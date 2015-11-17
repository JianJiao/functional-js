function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
      return submittedUsers.every(function checkIt(testItem) {
        return goodUsers.some(function findSome(goodItem) {
          return testItem.id === goodItem.id;
        });
      });
  };
}

module.exports = checkUsersValid;


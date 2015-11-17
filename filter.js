function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(function MessageFilter(elem) {
    return elem.message.length < 50;
  }).map(function messageMap(elem) {
    return elem.message;
  });
}

module.exports = getShortMessages
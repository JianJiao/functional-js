var test = console.log.bind({}, 1, 2, 3);
test();

test.call(this, 4, 5, 6);
test.apply({},[7, 8, 9]);

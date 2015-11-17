var test = function() {
  console.log(this);
}

var ta = test.bind({name: 'a'});
ta();
var tb = ta;
tb.call({name: 'b'});
tb();
tb.apply({lot: 'not'});
tc = tb.bind({name: 'changed again'});
tc();
td = tb.bind({name: 'sth new'});
td.call({name: 'sth new'});
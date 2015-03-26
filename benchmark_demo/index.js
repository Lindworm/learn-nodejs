var Benchmark = require('benchmark').Benchmark;
var suite = new Benchmark.Suite;

var number = '100';

suite
.add('+', function() {
  (function(str) {
    return +str;
  })(number);
})
.add('parseInt', function() {
  (function(str) {
    return parseInt(str);
  })(number);
})
.add('Number', function() {
  (function(str) {
    return Number(str);
  })(number);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({'async':true});

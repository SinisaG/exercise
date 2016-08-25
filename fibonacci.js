//0,1,1,2,3,5,8,13,...
function fibonacciRecursive (n) {
  if(n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciItr(n) {
  var previousValue = 0;
  var currentValue = 1;
  for (var i = 1; i < n; i++) {
      var nextValue = previousValue + currentValue;
      previousValue = currentValue;
      currentValue = nextValue;
  }
  return currentValue;
}

var start = Date.now();
console.log(fibonacciItr(50));
console.log((Date.now() - start)/1000);
console.log(fibonacciRecursive(50));
console.log((Date.now() - start)/1000);

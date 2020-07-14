/* Closure  in Javascript
Closure is created when an inner function has access to its outer function variables and arguments.
  In JavaScript, closures are created every time a function is created.
   The inner function has access to –
1. Its own variables.
2. Outer function's variables and arguments.
3. Global variables.

*/


var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
  /*The Result is "there's a type error" because firstResult
 is not a function, making it undefined. */


var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);  
/* Answer on console is 1 because it is declared and initialized as 1 in the global scope even though
 it is re-assigned in the function b() which does not return any value.
*/

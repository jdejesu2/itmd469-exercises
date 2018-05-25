/* NOTES
Functions
A function is created with an expression that starts with the keyword function.
Functions have a set of parameters (in this case, only x) and a body, which
contains the statements that are to be executed when the function is called.

global = scope
within parameters = local

Bindings declared with let and const are in fact local to the block that they
are declared in, so if you create one of those inside of a loop, the code before
and after the loop cannot “see” it

Blocks and functions can be created inside other blocks and functions,
producing multiple degrees of locality

closure --- It defines a function, wrapValue, that creates a local binding.
 It then returns a function that accesses and returns this local binding --
 being able to reference a specific instance of a local binding in an enclosing
 scope—is called closure

 a recursive solution
 function findSolution(target) {
  function find(current, history)

"The inner function find does the actual recursing. It takes two arguments:
the current number and a string that records how we reached this number.
If it finds a solution, it returns a string that shows how to get to the target.
If no solution can be found starting from this number, it returns null"

  {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
*/

//exercises

//3.1minimum
/*
 Write a function min that takes two arguments and returns their minimum
*/

function min(x, y) {
  if (x < y) return x;
  else return y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//3.2 Recursion

/*
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean
*/

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2); //the recursive call
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); //with negative, will recurse again and again, will
//run out of stack space and abort

// true
// false
// false

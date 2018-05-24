//Chapter2

//Triangle
//Write a loop that makes seven calls to console.log to output the following
//triangle:
//an example of getting a length
let abc = "abc";
console.log(abc.length); // → 3
//now the triangle code, reminds me of c++
for (let line = "*"; line.length < 7; line = line + "*")
  console.log(line);

//line = line + "*" could be line =+ "*"


//Fizzbuzz
//Write a program that uses console.log to print all the numbers from 1 to 100,
//with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
//number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

for (let x = 1; x < 100; x++) {
  let output = "";
  if (x % 3 == 0) output += "Fizz"; //remainder or divisiable by 3 , like 3, 9,6
  if (x % 5 == 0) output += "Buzz"; //same for 5, diviisable by 5, like 5, 10, 15
  console.log(output || x);
}

//Chessboard
//Write a program that creates a string that represents an 8×8 grid, using newline
//characters to separate lines. At each position of the grid there is either a
//space or a "#" character. The characters should form a chessboard

let size = 8 ;

let  chessboard =" ";

for (let width = 0; width < size; width++)
  {
    for (let length = 0; length < size; length++)
    // building that structure of the board
      {
        if ((length + width) % 2 == 0)
        {
          chessboard += " ";
        }
        else
        {
          chessboard += "#";
        }
      }
      chessboard += "\n";
    }
console.log(chessboard);

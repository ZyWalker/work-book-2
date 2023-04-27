let first = "a";
let second = "b";
let third = "c";

let alphabet = first + second + third;

alphabet= "Now I know my " + first + ", " + second + ', ' + third + "'s"
console.log(alphabet);
//^longer way

alphabet= `Now I know my ${first}, ${second}, ${third}'s`
console.log(alphabet);
//^better way

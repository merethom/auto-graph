
let testPhrase = "abcde";

let putIntoArray = Array.from(testPhrase);

//This array stores all the letters of the alphabet
let alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]


putIntoArray.forEach((item, i) => {
  console.log(item + " = " + alphabet.indexOf(item) );
});

/* Every time it loops, I want it to change the background-image property of an ID.*/

//This array stores all the letters of the alphabet
let alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

function convertInput(ogInput) {
  //1. We only need letters, so we will remove any numbers
  let removeNums = ogInput.replace(/[0-9]/g, '');
  //2. Remove anything symbols that may have been added
  let removeSymbols = removeNums.replace(/[^\w\s]/gi, '');
  //3. Also gotta remove dat whitespace
  let removeSpace = removeSymbols.replace(/\s/g, '');
  //4. Then we convert to lower case because UC and LC are different characters
  let removeCaps = removeSpace.toLowerCase();
  //5. We remove duplicate characters from the input function using this handy function from Chris West from https://cwestblog.com
  function uniqChars(str) {
    return str.replace(/[\s\S](?=([\s\S]+))/g, function(c, s) {
      return s.indexOf(c) + 1 ? '' : c;
    });
  }
  let removeDuplicates = uniqChars(removeCaps);
  //6. We remove all the whitespace
  let phraseTrimmed = removeDuplicates.replace(/\s/g, '');;
  return phraseTrimmed;
}



function makeSigil(){

  //1. Reset all letters and make opacity 0
  for (i = 0; i < alphabet.length; i++) {
    document.getElementById(alphabet[i]).style.opacity = "0";
  }
  //2. Take the desired sigil value input by the user
  let intention = document.getElementById("myIntention").value;
  //3. Convert it so all unnecessary text/chars/white space is removed
  let trimmedIntention = convertInput(intention);
  //4. Put trimmed input into an array
  let putIntoArray = Array.from(trimmedIntention);
  //5. Change the opacity of the background image when the string is present
  putIntoArray.forEach((item, i) => {
    let position = alphabet.indexOf(item);
    document.getElementById(alphabet[position]).style.opacity = "1";
    //console.log(alphabet[position]);
    //console.log(putIntoArray[i]);
  })
  //console.log(intention);
  // document.getElementById("kitten").innerHTML = intention;

} //End function

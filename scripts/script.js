
//This array stores all the letters of the alphabet
let alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

//Create this as a global variable so we can define it in makeSigil()
let doc;


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


// ---------------------------------------------------------------------------//
function makeSigil(){

  // Re-assigns value to the global variable every time the function is run.
  doc = new jsPDF();

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
    //For each letter in the input, change opacity so letter shows
    let position = alphabet.indexOf(item);
    document.getElementById(alphabet[position]).style.opacity = "1";
    //Add each letter to a downloadable PDF
    doc.addImage(arrayOfLetterImages[position], 'PNG', 75, 55, 60, 110);
  })

  document.getElementById("download").style.opacity = "1";
}
// ---------------------------------------------------------------------------//


// -----------------------------------------------------------------------//
//Downloads the PDF when we press a button
function saveAsPDF() {
  //Names the PDF whatever the user inputs into the sigil
  let nameOfPDF = document.getElementById("myIntention").value.replace(/\s/g, '');
  console.log(nameOfPDF);

  let originalInputFromUser = document.getElementById("myIntention").value;
  //Eventually replace this with the input from the form
  doc.setFillColor(8, 14, 39);
  doc.setFontSize(15);
  doc.text('' + originalInputFromUser, 105, 180, 'center');

  //Copyright information
  doc.setFontSize(7);
  doc.text('created by @merethom  /  © ' + yearIs, 105, 290, 'center');

  //Now we save the PDF
  doc.save(nameOfPDF+'.pdf');

}
// -----------------------------------------------------------------------//


//Takes input and executes makeSigil() function on keypress/click
let input = document.getElementById("myIntention");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitBtn").click();
  }
});

console.log(input);

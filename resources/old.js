function createPattern() {


  //1. First, we get the intention from the input
  let intention = document.getElementById("myIntention").value;

  //2. We only need letters, so we will remove any numbers
  let removeNums = intention.replace(/[0-9]/g, '');

  //3. Remove anything symbols that may have been added
  let removeSymbols = removeNums.replace(/[^\w\s]/gi, '');

  //3.5 Also gotta remove dat whitespace
  let removeSpace = removeSymbols.replace(/\s/g, '');

  //4. Then we convert to lower case because UC and LC are different characters
  let removeCaps = removeSpace.toLowerCase();

  //5. Function to remove duplicate characters from Chris West from https://cwestblog.com
  function uniqChars(str) {
    return str.replace(/[\s\S](?=([\s\S]+))/g, function(c, s) {
      return s.indexOf(c) + 1 ? '' : c;
    });
  }

  //6. Remove duplicate characters from intention
  let removeDuplicates = uniqChars(removeCaps);

  //7. Pass the chars from above into an array
  let letters = Array.from(removeDuplicates);

  // 8. This array holds values for all the letters of the alphabet,
  // Later they will get replaced with symbols
  let icons = [
    'alpha',
    'bravo',
    'charlie',
    'delta',
    'echo',
    'foxtrot',
    'golf',
    'hotel',
    'india',
    'juliet',
    'kilo',
    'lima',
    'mike',
    'november',
    'oscar',
    'papa',
    'quebec',
    'romeo',
    'sierra',
    'tango',
    'uniform',
    'victor',
    'whiskey',
    'xray',
    'yankee',
    'zulu'
  ]


//9. This series of if statements triggers whenever each letter appears
  if (removeDuplicates.includes("a")) {
    console.log(icons[0]);
    document.getElementById("a").style.display = "grid";
  } if (removeDuplicates.includes("b")) {
    console.log(icons[1]);
    document.getElementById("b").style.display = "grid";
  } if (removeDuplicates.includes("c")) {
    console.log(icons[2]);
  } if (removeDuplicates.includes("d")) {
    console.log(icons[3]);
  } if (removeDuplicates.includes("e")) {
    console.log(icons[4]);
  } if (removeDuplicates.includes("f")) {
    console.log(icons[5]);
  } if (removeDuplicates.includes("g")) {
    console.log(icons[6]);
  }  if (removeDuplicates.includes("h")) {
    console.log(icons[7]);
  }  if (removeDuplicates.includes("i")) {
    console.log(icons[8]);
  }  if (removeDuplicates.includes("j")) {
    console.log(icons[9]);
  }  if (removeDuplicates.includes("k")) {
    console.log(icons[10]);
  }  if (removeDuplicates.includes("l")) {
    console.log(icons[11]);
  }  if (removeDuplicates.includes("m")) {
    console.log(icons[12]);
  }  if (removeDuplicates.includes("n")) {
    console.log(icons[13]);
  }  if (removeDuplicates.includes("o")) {
    console.log(icons[14]);
  }  if (removeDuplicates.includes("p")) {
    console.log(icons[15]);
  }  if (removeDuplicates.includes("q")) {
    console.log(icons[16]);
  }  if (removeDuplicates.includes("r")) {
    console.log(icons[17]);
  }  if (removeDuplicates.includes("s")) {
    console.log(icons[18]);
  }  if (removeDuplicates.includes("t")) {
    console.log(icons[19]);
  }  if (removeDuplicates.includes("u")) {
    console.log(icons[20]);
  }  if (removeDuplicates.includes("v")) {
    console.log(icons[21]);
  }  if (removeDuplicates.includes("w")) {
    console.log(icons[22]);
  }  if (removeDuplicates.includes("x")) {
    console.log(icons[23]);
  }  if (removeDuplicates.includes("y")) {
    console.log(icons[24]);
  }  if (removeDuplicates.includes("z")) {
    console.log(icons[25]);
  }


  document.getElementById("result").innerHTML = removeDuplicates;

  //document.getElementById("array").innerHTML = icons[0]+icons[3];
console.log(testObject[0].background);
}

let i;
for (i = 0; i < putIntoArray.length; i++) {
  //console.log(alphabet.indexOf(putIntoArray[i]));
  let position = alphabet.indexOf(putIntoArray[i]);
  console.log(position + ' ' + alphabet[position]);
}

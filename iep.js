inpString = "Iep iepz! . 99q";
let outString = "";

const small = "abcdefghijklmnopqrstuvwxyz";
const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphLength = small.length;
const cyphShift = 1;

for (let i in inpString) {
  // First handle non-capitals
  if (inpString[i].match(/[a-z]/)) {
    const ind = small.indexOf(inpString[i]);
    outString += small[(ind + cyphShift) % alphLength];
    // Capital letters handling
  } else if (inpString[i].match(/[A-Z]/)) {
    const ind = large.indexOf(inpString[i]);
    outString += large[(ind + cyphShift) % alphLength];
  }
  // What remains are non-letter symbols
  else {
    outString += inpString[i];
  }
}

console.log(outString);

module.exports = {
  sum: (a, b) => {
    return a + b;
  },
  capitalize: (inpString) => {
    return inpString.charAt(0).toUpperCase() + inpString.slice(1);
  },
  reverseString: (inpString) => {
    let outString = "";
    for (let i in inpString) {
      outString += inpString[inpString.length - i - 1];
    }
    return outString;
  },
  calculator: {
    add: (inp1, inp2) => {
      return inp1 + inp2;
    },

    substract: (inp1, inp2) => {
      return inp1 - inp2;
    },

    multiply: (inp1, inp2) => {
      return inp1 * inp2;
    },

    divide: (inp1, inp2) => {
      return inp1 / inp2;
    },
  },
  caesarCipher: (inpString, cyphShift) => {
    let outString = "";

    const small = "abcdefghijklmnopqrstuvwxyz";
    const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphLength = small.length;

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
    return outString;
  },
};

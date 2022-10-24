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
};

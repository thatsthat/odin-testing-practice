inpArr = [1, 8, 3, 4, 2, 6];

const arrProps = {
  average: inpArr.reduce((a, b) => a + b) / inpArr.length,
  min: Math.min(...inpArr),
  max: Math.max(...inpArr),
  length: inpArr.length,
};
console.log(arrProps);

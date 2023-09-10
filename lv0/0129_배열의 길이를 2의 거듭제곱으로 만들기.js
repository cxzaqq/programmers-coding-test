//my answer
const solution = (arr) => {
  let l;
  for (let i = 0; i < 11; i++) {
    if (arr.length <= Math.pow(2, i)) {
      l = Math.pow(2, i);
      break;
    }
  }
  while (arr.length !== l) {
    arr.push(0);
  }
  return arr;
};

//most liked answer
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}

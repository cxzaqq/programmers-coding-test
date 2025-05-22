//my answer
const solution = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a + c, 0);
};

//most liked answer
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

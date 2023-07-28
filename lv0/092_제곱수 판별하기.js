//my answer
const solution = (n) => {
  if (Number.isInteger(Math.sqrt(n))) {
    return 1;
  }
  return 2;
};

//most liked answer
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

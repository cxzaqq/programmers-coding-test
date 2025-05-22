//my answer
const solution = (absolutes, signs) =>
  absolutes.reduce((a, c, i) => {
    return signs[i] ? a + c : a - c;
  }, 0);

//most liked answer
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

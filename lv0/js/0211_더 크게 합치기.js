//my answer
const solution = (a, b) => {
  const aa = +(a.toString() + b.toString());
  const bb = +(b.toString() + a.toString());
  return aa > bb ? aa : bb;
};

//most liked answer
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

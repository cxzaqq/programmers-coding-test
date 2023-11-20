//my answer
const solution = (n) => [...n.toString()].reduce((a, c) => a + +c, 0);

//most liked answer
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

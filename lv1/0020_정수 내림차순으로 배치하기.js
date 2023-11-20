//my answer
const solution = (n) => +[...n.toString()].sort((a, b) => b - a).join("");

//most liked answer
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");
  return +newArr;
}

//my answer
const solution = (my_string) =>
  my_string.toLowerCase().split("").sort().join("");

//most liked answer
function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}

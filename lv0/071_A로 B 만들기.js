//my answer
const solution = (before, after) => {
  var answer = 0;
  var before = before.split("").sort().join("");
  var after = after.split("").sort().join("");
  answer = before === after ? 1 : 0;
  return answer;
};

//most liked answer
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

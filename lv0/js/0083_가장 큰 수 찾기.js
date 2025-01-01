//my answer
const solution = (array) => {
  let answer = [];
  answer.push(Math.max(...array));
  answer.push(array.indexOf(Math.max(...array)));
  return answer;
};

//most liked answer
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

//my answer
const solution = (array, height) => {
  let answer = 0;
  array.forEach((e) => {
    if (e > height) answer++;
  });
  return answer;
};

//most liked answer
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

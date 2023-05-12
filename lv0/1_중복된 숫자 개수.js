//my answer
const solution = (array, n) => {
  let answer = 0;
  array.forEach((e) => {
    if (e === n) answer++;
  });
  return answer;
};

//most liked answer
function solution(array, n) {
  let Array = array.filter((item) => item === n);
  return Array.length;
}

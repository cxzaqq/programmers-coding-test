//my answer
const solution = (a, d, included) => {
  let answer = 0;
  let temp = a;
  included.forEach((e) => {
    if (e) answer += temp;
    temp += d;
  });
  return answer;
};

//most liked answer
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

//my answer
const solution = (n) => {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
};

//most liked answer
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
//수열

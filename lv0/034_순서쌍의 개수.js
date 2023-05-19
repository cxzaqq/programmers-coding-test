//my answer
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer++;
  }
  return answer;
};

//most liked answer
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) ans += 2;
  }
  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
//이게 더 빠름
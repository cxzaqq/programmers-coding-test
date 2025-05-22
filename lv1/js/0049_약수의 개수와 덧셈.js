//my answer
const divisorCount = (n) => {
  const arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i);
      arr.push(n / i);
    }
  }
  return [...new Set(arr)].length;
};

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    divisorCount(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
};

//most liked answer
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
// 제곱근이 정수면 약수의 개수가 홀수 아니면 짝수

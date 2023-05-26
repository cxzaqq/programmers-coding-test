//my answer
const solution = (n) => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) arr.push(i);
  }

  return arr;
};

//most liked answer
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}
// Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다

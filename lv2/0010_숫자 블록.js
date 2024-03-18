//my answer
const solution = (begin, end) => {
  let answer = [];
  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }
    if (isPrime(i)) answer.push(1);
    else answer.push(maxD(i));
  }
  return answer;
};

const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const maxD = (n) => {
  let arr = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i <= 1e7) return n / i;
      else arr.push(i);
    }
  }
  return arr[arr.length - 1];
};

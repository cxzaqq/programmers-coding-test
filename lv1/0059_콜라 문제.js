//my answer
const solution = (a, b, n) => {
  let answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
};

//most liked answer
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

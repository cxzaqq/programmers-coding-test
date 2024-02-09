//my answer
const solution = (number, limit, power) => {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(getFactors(i));
  }
  return arr.reduce((a, c) => {
    if (c > limit) return a + power;
    else return a + c;
  });
};

const getFactors = (n) => {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i != i) arr.push(n / i);
    }
  }
  return arr.length;
};

//most liked answer
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

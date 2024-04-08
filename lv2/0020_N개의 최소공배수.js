//my answer
const solution = (arr) => {
  let max = arr.reduce((a, c) => a * c, 1);
  for (let i = Math.max(...arr); i <= max; i++) {
    let pos = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] !== 0) pos = 0;
    }
    if (pos === 1) return i;
  }
};

//most liked answer
//두 수를 곱한 값에 두 수의 최대공약수를 나누면 두 수의 최소공배수임
const solution1 = (num) => num.reduce((a, b) => (a * b) / gcd(a, b));
const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);

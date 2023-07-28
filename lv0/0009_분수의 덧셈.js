//my answer
const solution = (numer1, denom1, numer2, denom2) => {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let m = 1;
  for (let i = 1; i <= Math.min(numer, denom); i++) {
    if (numer % i === 0 && denom % i === 0) {
      m = i;
    }
  }
  return [numer / m, denom / m];
};

//most liked answer
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num);

  return [denum / gcd, num / gcd];
}

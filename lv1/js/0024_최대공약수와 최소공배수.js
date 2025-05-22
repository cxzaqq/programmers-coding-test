//my answer
const GCD = (n, m) => {
  let gcd;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }
  return gcd;
};

const LCM = (n, m) => {
  let lcm = 1;
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) break;
    lcm++;
  }
  return lcm;
};

const solution = (n, m) => [GCD(n, m), LCM(n, m)];

//most liked answer
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

//my answer
const solution = (a, b, c, d) => {
  const obj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const array = [a, b, c, d];
  array.forEach((e) => {
    obj[e] += 1;
  });
  let p, q, r;
  if (!!Object.values(obj).find((e) => e === 4))
    return +Object.keys(obj).find((e) => obj[e] === 4) * 1111;
  if (!!Object.values(obj).find((e) => e === 3))
    return (
      (10 * +Object.keys(obj).find((e) => obj[e] === 3) +
        +Object.keys(obj).find((e) => obj[e] === 1)) **
      2
    );
  if (!!Object.values(obj).find((e) => e === 2)) {
    if (!!Object.values(obj).find((e) => e === 1)) {
      q = +Object.keys(obj).find((e) => obj[e] === 1);
      obj[q] -= 1;
      r = +Object.keys(obj).find((e) => obj[e] === 1);
      return q * r;
    } else {
      p = +Object.keys(obj).find((e) => obj[e] === 2);
      obj[p] -= 1;
      q = +Object.keys(obj).find((e) => obj[e] === 2);
      return (p + q) * Math.abs(p - q);
    }
  }
  return +Object.keys(obj).find((e) => obj[e] === 1);
};

//most liked answer
function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}
/*
?
*/

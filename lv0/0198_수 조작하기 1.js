//my answer
const solution = (n, control) => {
  [...control].forEach((e) => {
    if (e === "w") n += 1;
    if (e === "s") n -= 1;
    if (e === "d") n += 10;
    if (e === "a") n -= 10;
  });
  return n;
};

//most liked answer
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}

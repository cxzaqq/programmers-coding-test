//my answer
const solution = (a, b, c) => {
  if (a === b && b === c)
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  if (a !== b && b !== c && a !== c) return a + b + c;
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
};

//most liked answer
const solution1 = (a, b, c) => {
  const set = new Set([a, b, c]);
  switch ([...set].length) {
    case 1:
      return calculate([a, b, c], 3);
    case 2:
      return calculate([a, b, c], 2);
    case 3:
      return calculate([a, b, c]);
  }
};

const calculate = (inc, n = 1) => {
  const [a, b, c] = inc;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }

  return result;
};

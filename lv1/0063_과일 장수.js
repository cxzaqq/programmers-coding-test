//my answer
const solution = (k, m, score) =>
  score
    .sort((a, b) => b - a)
    .reduce((a, c, i) => {
      if ((i + 1) % m === 0) return a + c * m;
      else return a + 0;
    }, 0);

//most liked answer
solution = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;

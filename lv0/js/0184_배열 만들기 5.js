//my answer
const solution = (intStrs, k, s, l) =>
  intStrs.map((e) => +e.slice(s, s + l)).filter((e) => e > k);

//my answer
const solution = (ineq, eq, n, m) =>
  (eq === "=" ? (ineq === "<" ? n <= m : n >= m) : ineq === "<" ? n < m : n > m)
    ? 1
    : 0;

//most liked answer
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

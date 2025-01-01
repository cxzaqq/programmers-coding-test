//my answer
const solution = (l, r) => {
  const result = [];
  for (let i = l; i <= r; i++) {
    if (/^[50]+$/g.test(i)) result.push(i);
  }
  return result.length === 0 ? [-1] : result;
};

//most liked answer
function solution(l, r) {
  const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (n) => !/[^05]/.test(n)
  );
  return result.length ? result : [-1];
}

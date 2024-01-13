//my answer
const solution = (sizes) => {
  let hs = [];
  let vs = [];
  sizes.forEach(([a, b]) => {
    if (a >= b) {
      hs.push(a);
      vs.push(b);
    } else {
      hs.push(b);
      vs.push(a);
    }
  });
  return Math.max(...hs) * Math.max(...vs);
};

//most liked answer
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}

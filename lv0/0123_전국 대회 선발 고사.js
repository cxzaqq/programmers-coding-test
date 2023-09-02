//my answer
const solution = (rank, attendance) => {
  let arr = [];
  const obj = rank.reduce((a, c, i) => {
    a[c] = attendance[i];
    return a;
  }, new Object());
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === true) arr.push(rank.indexOf(+keys[i]));
    if (arr.length === 3) break;
  }
  return 10000 * arr[0] + 100 * arr[1] + arr[2];
};

//most liked answer
function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}

//my answer
const solution = (strArr) => {
  let obj = {};
  strArr.forEach((e) => {
    obj[e.length] === undefined ? (obj[e.length] = 1) : (obj[e.length] += 1);
  });
  return Math.max(...Object.values(obj));
};

//most liked answer
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
}

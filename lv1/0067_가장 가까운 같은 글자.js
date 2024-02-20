//my answer
const solution = (s) => {
  let obj = {};
  let t;
  return [...s].map((v, i) => {
    if (obj[v] === undefined) {
      obj[v] = i;
      return -1;
    } else {
      t = i - obj[v];
      obj[v] = i;
      return t;
    }
  });
};

//most liked answer
function solution(s) {
  const hash = {};
  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

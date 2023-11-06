//my answer
const solution = (arr, queries) => {
  queries.forEach((e) => {
    arr = arr.map((v, i) => {
      if (i >= e[0] && i <= e[1] && i % e[2] === 0) return v + 1;
      return v;
    });
  });
  return arr;
};

//most liked answer
function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}

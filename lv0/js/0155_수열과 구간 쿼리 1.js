//my answer
const solution = (arr, queries) => {
  queries.forEach((e) => {
    for (let i = e[0]; i <= e[1]; i++) {
      arr[i] = arr[i] + 1;
    }
  });
  return arr;
};

//most liked answer
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}
/*
forEach()에 구조 분해 할당 적용 가능.
*/

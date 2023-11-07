//my answer
const solution = (arr, queries) => {
  let temp;
  queries.forEach((e) => {
    temp = arr[e[0]];
    arr[e[0]] = arr[e[1]];
    arr[e[1]] = temp;
  });
  return arr;
};

//most liked answer
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
/*
배열 값 바꿀 때 구조 분해 할당 사용 가능
*/

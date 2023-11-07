//my answer
const solution = (arr, queries) => {
  let result = [];
  let temp = [];
  queries.forEach((e) => {
    arr.forEach((l, i) => {
      if (e[0] <= i && i <= e[1] && e[2] < arr[i]) {
        temp.push(arr[i]);
      }
    });
    if (temp.length > 1) {
      temp.sort((a, b) => a - b); // sort()는 문자열이라 생각하고 정렬함
      while (temp.length !== 1) {
        temp.pop();
      }
    }
    if (temp.length === 0) temp.push(-1);
    result = [...result, ...temp];
    temp.length = 0;
  });
  return result;
};

//most liked answer
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

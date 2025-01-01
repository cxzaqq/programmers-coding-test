//my answer
const solution = (arr, k) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === k) break;
    if (!answer.includes(arr[i])) answer.push(arr[i]);
  }
  while (answer.length !== k) {
    answer.push(-1);
  }
  return answer;
};

//most liked answer
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}

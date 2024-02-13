//my answer
const solution = (t, p) => {
  let answer = 0;
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    for (let j = 0; j < p.length; j++) {
      arr2.push([...t][i + j]);
    }
    arr.push(arr2.join(""));
    arr2.length = 0;
  }
  arr.forEach((e) => {
    if (+e <= +p) answer++;
  });
  return answer;
};

//most liked answer
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

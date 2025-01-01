//my answer
const solution = (n) => {
  let answer = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    answer = answer + Number(arr[i]);
  }
  return answer;
};

//most liked answer
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

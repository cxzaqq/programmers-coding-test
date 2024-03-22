//my answer
const solution = (s) => {
  let arr = s
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
};

//most liked answer
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

//my answer
const solution = (num, k) => {
  let answer = -1;
  let arr = num.toString().split("");
  let s = k.toString();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === s) {
      answer = i + 1;
      break;
    }
  }
  return answer;
};

//most liked answer
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

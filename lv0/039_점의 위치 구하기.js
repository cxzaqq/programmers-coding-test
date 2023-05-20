//my answer
const solution = (dot) => {
  let answer;
  dot[0] > 0
    ? dot[1] > 0
      ? (answer = 1)
      : (answer = 4)
    : dot[1] > 0
    ? (answer = 2)
    : (answer = 3);
  return answer;
};

//most liked answer
function solution(dot) {
  const [num1, num2] = dot;
  const check = num1 * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 3;
}
//구조 분해 할당 후 곱셈으로 판단

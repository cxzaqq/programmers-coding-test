//my answer
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

const solution = (n) => {
  let i = 1;
  while (true) {
    if (factorial(i) > n) {
      return i - 1;
    }
    i++;
  }
};

//most liked answer
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
//for문 처음에 변수를 두 개 지정 가능, i의 증감값을 이용 가능

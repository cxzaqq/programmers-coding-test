//my answer
const solution = (numbers, n) => {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
    if (answer > n) break;
  }
  return answer;
};

//most liked answer
function solution(numbers, n) {
  return numbers.reduce((a, c) => (a <= n ? a + c : a));
}

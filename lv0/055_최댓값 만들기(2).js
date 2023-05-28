//my answer
const solution = (n) => {
  let answer = n[0] * n[1];
  for (let i = 0; i < n.length - 1; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] * n[j] > answer) {
        answer = n[i] * n[j];
      }
    }
  }
  return answer;
};

//most liked answer
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

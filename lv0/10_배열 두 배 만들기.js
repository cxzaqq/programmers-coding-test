//my answer
const solution = (numbers) => {
  return numbers.map((e) => {
    return e * 2;
  });
};

//most liked answer
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

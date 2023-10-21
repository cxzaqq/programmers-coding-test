//my answer
const solution = (start, end) => {
  let answer = [];
  for (let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
};

//most liked answer

2;
const solution1 = (start, end) =>
  Array(start - end + 1)
    .fill(start)
    .map((v, i) => v - i);

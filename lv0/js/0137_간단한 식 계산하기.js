//my answer
const solution = (binomial) => {
  let answer;
  let arr = binomial.split(" ");
  switch (arr[1]) {
    case "+":
      answer = +arr[0] + +arr[2];
      break;
    case "-":
      answer = +arr[0] - +arr[2];
      break;
    case "*":
      answer = +arr[0] * +arr[2];
      break;
  }
  return answer;
};

//most liked answer
const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}

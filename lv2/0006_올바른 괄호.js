//my answer
const solution = (s) => {
  let stack = [];
  [...s].forEach((e) => {
    if (e === "(") stack.push(e);
    else {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(e);
    }
  });
  return stack.length === 0 ? true : false;
};

//most liked answer
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

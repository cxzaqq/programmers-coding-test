//my answer
const solution = (k, score) => {
  let answer = [];
  let arr = [];
  score.forEach((e, i) => {
    if (i < k) {
      arr.push(e);
      arr.sort((a, b) => b - a);
      answer.push(arr[arr.length - 1]);
    } else {
      arr.push(e);
      arr.sort((a, b) => b - a);
      arr.length = k;
      answer.push(arr[arr.length - 1]);
    }
  });
  return answer;
};

//most liked answer
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

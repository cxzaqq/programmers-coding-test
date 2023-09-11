//my answer
const solution = (arr) => {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) stk.push(arr[i]);
    else {
      if (stk[stk.length - 1] === arr[i]) stk.pop();
      else stk.push(arr[i]);
    }
  }
  return stk.length === 0 ? [-1] : stk;
};

//most liked answer
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });
  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}

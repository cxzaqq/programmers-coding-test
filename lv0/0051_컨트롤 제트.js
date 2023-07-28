//my answer
const solution = (s) => {
  let arr = s.split(" ");
  while (arr.find((e) => e === "Z")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "Z") {
        arr.splice(arr.indexOf(arr[i]) - 1, 2);
        break;
      }
    }
  }
  return arr.reduce((acc, cur) => acc + +cur, 0);
};

//most liked answer
function solution(s) {
  const stack = [];
  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop;
    else stack.push(+target);
  });
  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

//my answer
const solution = (arr, flag) => {
  let X = [];
  arr.forEach((e, i) => {
    if (flag[i] === true) {
      X = [...X, ...new Array(arr[i] * 2).fill(arr[i])];
    } else {
      X.splice(X.length - arr[i]);
    }
  });
  return X;
};

//most liked answer
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}

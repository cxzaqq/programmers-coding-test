//my answer
const solution = (arr) => {
  let X = [];
  arr.forEach((e) => {
    X = [...X, ...new Array(e).fill(e)];
  });
  return X;
};

//most liked answer
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

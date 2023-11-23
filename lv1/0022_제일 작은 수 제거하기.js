//my answer
const solution = (arr) => {
  if (arr.length === 1) return [-1];
  let t = arr[0];
  for (let i = 1; i < arr.length; i++) {
    t = t < arr[i] ? t : arr[i];
  }
  return arr.filter((e) => e !== t);
};

//most liked answer
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

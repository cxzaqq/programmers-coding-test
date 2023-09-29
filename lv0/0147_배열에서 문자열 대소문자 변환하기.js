//my answer
const solution = (strArr) =>
  strArr.map((v, i) => {
    if (i % 2 === 0) return v.toLowerCase();
    else return v.toUpperCase();
  });

//most liked answer
function solution(strArr) {
  return strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}

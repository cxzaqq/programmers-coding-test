//my answer
const solution = (n) => [...n.toString()].reverse().map((v) => +v);

//most liked answer
function solution(n) {
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}

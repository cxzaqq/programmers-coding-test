//my answer
const solution = (number, n, m) =>
  number % n === 0 && number % m === 0 ? 1 : 0;

//most liked answer
function solution(number, n, m) {
  return +!(number % n || number % m);
}

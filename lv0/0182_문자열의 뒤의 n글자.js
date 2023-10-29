//my answer
const solution = (my_string, n) =>
  my_string.slice(my_string.length - n, my_string.length + 1);

//most liked answer
function solution(my_string, n) {
  var answer = my_string.slice(-1 * n);
  return answer;
}

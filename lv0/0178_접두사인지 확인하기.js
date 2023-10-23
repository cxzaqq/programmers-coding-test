//my answer
const solution = (my_string, is_prefix) =>
  my_string.search(is_prefix) === 0 ? 1 : 0;

//most liked answer
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

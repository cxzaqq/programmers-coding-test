//my answer
const solution = (num_list) =>
  num_list.sort((a, b) => a - b).filter((_, i) => i <= 4);

//most liked answer
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

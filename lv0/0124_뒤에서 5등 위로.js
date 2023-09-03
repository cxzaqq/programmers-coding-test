//my answer
const solution = (num_list) =>
  num_list.sort((a, b) => a - b).filter((e, i) => i >= 5);

//most liked answer
function solution(num_list) {
  var answer = [];
  return (answer = num_list
    .sort((a, b) => {
      return a - b;
    })
    .slice(5));
}

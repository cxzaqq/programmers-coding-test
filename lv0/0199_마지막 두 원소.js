//my answer
const solution = (num_list) => {
  num_list[num_list.length - 1] > num_list[num_list.length - 2]
    ? num_list.push(
        num_list[num_list.length - 1] - num_list[num_list.length - 2]
      )
    : num_list.push(num_list[num_list.length - 1] * 2);
  return num_list;
};

//most liked answer
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

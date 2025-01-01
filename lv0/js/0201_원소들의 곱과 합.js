//my answer
const solution = (num_list) =>
  num_list.reduce((a, c) => a + c, 0) ** 2 > num_list.reduce((a, c) => a * c, 1)
    ? 1
    : 0;

//most liked answer
function solution(num_list) {
  let accMul = 1;
  let accSum = 0;
  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }
  return accMul < accSum ** 2 ? 1 : 0;
}

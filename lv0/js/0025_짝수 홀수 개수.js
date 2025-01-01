//my answer
const solution = (num_list) => {
  let answer = [0, 0];
  num_list.forEach((e) => {
    e % 2 === 0 ? answer[0]++ : answer[1]++;
  });
  return answer;
};

//most liked answer
function solution(num_list) {
  var answer = [0, 0];
  for (let a of num_list) {
    answer[a % 2] += 1;
  }
  return answer;
}

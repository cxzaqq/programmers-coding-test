//my answer
const solution = (num, total) => {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + i;
  }
  let startNum = (total - sum) / num;
  for (let i = 0; i < num; i++) {
    answer.push(startNum + i);
  }
  return answer;
};

//most liked answer
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}

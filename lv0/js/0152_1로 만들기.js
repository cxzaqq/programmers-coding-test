//my answer
const solution = (num_list) => {
  let answer = 0;
  num_list.forEach((e) => {
    while (e !== 1) {
      if (e % 2 === 0) {
        e = e / 2;
        answer++;
      } else {
        e = (e - 1) / 2;
        answer++;
      }
    }
  });
  return answer;
};

//most liked answer
function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}
/*
number.toString(2) => 2진수
 */
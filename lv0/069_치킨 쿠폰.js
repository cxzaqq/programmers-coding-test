//my answer
const solution = (chicken) => {
  var answer = 0;
  var c = chicken;
  while (c > 9) {
    answer = answer + parseInt(c / 10);
    c = c - parseInt(c / 10) * 10 + parseInt(c / 10);
  }
  return answer;
};

//most liked answer
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

//other
function solution(chicken) {
  return ~~(chicken * 0.111111);
}
/*
chicken * 0.111111는 chicken / 9와 동일
~~로 소수점 버리기
*/

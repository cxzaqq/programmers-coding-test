//my answer
const solution = (a, b) => {
  let answer = 0;
  a.forEach((e, i) => {
    answer += e * b[i];
  });
  return answer;
};

//most liked asnwer
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
/*
reduce는 4개의 인자를 갖는다
1. acc(누산기)
2. cur(현재 값)
3. idx(현재 인덱스)
4. src(원본 배열)
*/

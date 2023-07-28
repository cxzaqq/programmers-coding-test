//my answer
const solution = (my_string) => {
  return [...my_string.replace(/[a-z]/g, "")]
    .map((e) => +e)
    .sort((a, b) => a - b);
};

//most liked answer
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => +n);
}
/*
.match()는 문자열이 정규식과 매치되는 부분을 검색해서 배열로 보여줌
\d는 숫자
*/

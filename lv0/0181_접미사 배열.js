//my answer
const solution = (my_string) => {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i, my_string.length));
  }
  return answer.sort();
};

//most liked answer
function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}
/*
.substring(indexStart[, indexEnd])
indexStart부터 indexEnd(포함 X)까지의 문자열 반환
*/

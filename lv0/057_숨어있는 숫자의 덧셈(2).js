//my answer
const solution = (my_string) => {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    let num = "";
    while (!Number.isNaN(Number(my_string[i]))) {
      num += my_string[i];
      i++;
    }
    answer += +num;
  }
  return answer;
};

//most liked answer
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + +cur, 0);
}
/*
정규식 사용
\D : Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]
*/

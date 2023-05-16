//my answer
const solution = (my_string) => {
  return my_string.split("").reverse().join("");
};

//most liked answer
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}

//my answer
const solution = (my_string, letter) => {
  return [...my_string].filter((e) => e !== letter).join("");
};

//most liked answer
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

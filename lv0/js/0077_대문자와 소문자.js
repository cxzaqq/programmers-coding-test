//my answer
const solution = (my_string) => {
  var answer = "";
  var array = my_string.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i].toLowerCase()) {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
  }
  answer = array.join("");
  return answer;
};

//most liked answer
function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

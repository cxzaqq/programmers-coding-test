//my answer
const solution = (my_string, num1, num2) => {
  let array = my_string.split("");
  let t = array[num1];
  array[num1] = array[num2];
  array[num2] = t;

  return array.join("");
};

//most liked answer
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
//구조 분해 할당

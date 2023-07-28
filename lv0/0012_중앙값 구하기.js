//my answer
function solution(array) {
  array = array.sort((a, b) => a - b);
  return array[parseInt(array.length / 2)];
}

//most liked answer
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
//parseInt, Math.floor, Math.trunc

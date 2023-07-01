//my answer
const solution = (i, j, k) => {
  var answer = 0;
  var array = [];
  for (var a = i; a < j + 1; a++) {
    array.push(a.toString());
  }
  array = array.join("");
  array = array.split("");
  for (var a = 0; a < array.length; a++) {
    if (array[a] === k.toString()) answer++;
  }
  return answer;
};

//most liked answer
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

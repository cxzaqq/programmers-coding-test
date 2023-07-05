//my answer
const solution = (array, n) => {
  var dArr = [];
  var aArr = [];
  for (var i = 0; i < array.length; i++) {
    dArr.push(Math.abs(array[i] - n));
  }
  for (var i = 0; i < array.length; i++) {
    if (Math.min(...dArr) === Math.abs(array[i] - n)) {
      aArr.push(array[i]);
    }
  }
  return Math.min(...aArr);
};

//most liked answer
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

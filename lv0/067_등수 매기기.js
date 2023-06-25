//my answer
const solution = (score) => {
  var array = [];
  for (var i = 0; i < score.length; i++) {
    var s = 0;
    for (var j = 0; j < 2; j++) {
      s += score[i][j];
    }
    array.push(s);
  }
  var answer = new Array(array.length).fill(1);
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[i]) answer[i]++;
    }
  }
  return answer;
};

//most liked answer
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

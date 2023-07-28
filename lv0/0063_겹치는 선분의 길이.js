//my answer
const solution = (lines) => {
  var answer = 0;
  let line = new Array(200).fill(0);

  for (var i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (var j = left; j < right; j++) {
      line[j + 100] += 1;
    }
  }

  for (let i in line) {
    if (line[i] > 1) answer += 1;
  }

  return answer;
};

//most liked answer
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
// for문 앞 조건 생략 가능

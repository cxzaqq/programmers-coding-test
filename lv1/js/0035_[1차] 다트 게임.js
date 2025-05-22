//my answer
const solution = (dartResult) => {
  let num = [];
  dartResult = [...dartResult];
  dartResult.forEach((e, i) => {
    if (/[0-9]/.test(e)) {
      if (/[0-9]/.test(dartResult[i - 1])) {
        num[num.length - 1] += e;
      } else {
        num.push(e);
      }
    }
  });
  num = num.map((v) => +v);

  let op = dartResult
    .join("")
    .split(/[0-9]/)
    .filter((e) => e);

  op.forEach((e1, i) => {
    [...e1].forEach((e2) => {
      switch (e2) {
        case "D":
          num[i] = num[i] ** 2;
          break;
        case "T":
          num[i] = num[i] ** 3;
          break;
        case "*":
          num[i] = num[i] * 2;
          num[i - 1] = num[i - 1] * 2;
          break;
        case "#":
          num[i] = num[i] * -1;
      }
    });
  });
  return num.reduce((a, c) => a + c, 0);
};

//most liked answer
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
/*
/\d.?\D/g
\d는 숫자
.은 뒤에 하나 추가
?는 있으면
\D는 숫자를 제외한 문자
즉 숫자 + 뒤에 문자 + 있으면 다른 문자 추가

darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/)
1S => ['1S', '1', 'S', undefined]
2D* => ['2D*', '2', 'D', '*']
*/

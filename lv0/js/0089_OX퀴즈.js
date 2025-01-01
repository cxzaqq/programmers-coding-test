//my answer
const solution = (quiz) => {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let array = quiz[i].split(" ");
    let X = Number(array[0]);
    let operator = array[1];
    let Y = Number(array[2]);
    let Z = Number(array[4]);
    if (operator === "+") {
      X + Y === Z ? answer.push("O") : answer.push("X");
    } else {
      X - Y === Z ? answer.push("O") : answer.push("X");
    }
  }
  return answer;
};

//most liked answer
function solution(quiz) {
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}

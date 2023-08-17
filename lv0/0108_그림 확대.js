//my answer
const solution = (picture, k) => {
  let answer = [];
  for (let row of picture) {
    let newRow = row
      .split("")
      .map((e) => e.repeat(k))
      .join("");
    for (let i = 0; i < k; i++) answer.push(newRow);
  }
  return answer;
};

//most liked answer
function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}

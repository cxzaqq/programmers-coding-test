//my answer
const solution = (answers) => {
  let answer = [];
  const obj = { one: 0, two: 0, three: 0 };
  const arr1 = [..."12345".repeat(Math.floor(answers.length / 5) + 1)];
  const arr2 = [..."21232425".repeat(Math.floor(answers.length / 8) + 1)];
  const arr3 = [..."3311224455".repeat(Math.floor(answers.length / 10) + 1)];
  answers.forEach((e, i) => {
    if (e === +arr1[i]) obj.one++;
    if (e === +arr2[i]) obj.two++;
    if (e === +arr3[i]) obj.three++;
  });
  const max = Math.max(obj.one, obj.two, obj.three);
  if (obj.one === max) answer.push(1);
  if (obj.two === max) answer.push(2);
  if (obj.three === max) answer.push(3);
  return answer;
};

//most liked answer
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) answer.push(1);
  if (a2c === max) answer.push(2);
  if (a3c === max) answer.push(3);

  return answer;
}

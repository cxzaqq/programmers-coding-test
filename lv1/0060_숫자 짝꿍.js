//my answer
const solution = (X, Y) => {
  let answer = "";
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);
  [...X].forEach((e) => xArr[e]++);
  [...Y].forEach((e) => yArr[e]++);
  xArr.forEach((e, i) => {
    answer += String(i).repeat(Math.min(e, yArr[i]));
  });
  if (answer === "") return "-1";
  if (+answer === 0) return "0";
  return [...answer].sort((a, b) => b - a).join("");
};

//most liked answer
function solution(X, Y) {
  let result = "";
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === "") return "-1";
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}

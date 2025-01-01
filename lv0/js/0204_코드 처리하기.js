//my answer
const solution = (code) => {
  let result = "";
  let mode = 0;
  [...code].forEach((e, i) => {
    if (e === "1") {
      if (mode === 0) mode = 1;
      else mode = 0;
      return;
    }
    if (mode === 0) {
      if (i % 2 === 0) result += e;
    }
    if (mode === 1) {
      if (i % 2 !== 0) result += e;
    }
  });
  return result.length === 0 ? "EMPTY" : result;
};

//most liked answer
function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    if (Number(code[i]) === 1) {
      mode = mode === 1 ? 0 : 1;
    }
    if (Number(code[i]) !== 1 && i % 2 === mode) {
      answer += code[i];
    }
  }
  return answer.length > 0 ? answer : "EMPTY";
}

//my answer
const solution = (numLog) => {
  const result = [];
  for (let i = 0; i < numLog.length; i++) {
    if (numLog[i] - numLog[i + 1] === -1) result.push("w");
    if (numLog[i] - numLog[i + 1] === 1) result.push("s");
    if (numLog[i] - numLog[i + 1] === -10) result.push("d");
    if (numLog[i] - numLog[i + 1] === 10) result.push("a");
  }
  return result.join("");
};

//my answer
function solution(numLog) {
  const convert = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a",
  };

  return numLog
    .slice(1)
    .map((v, i) => {
      return convert[v - numLog[i]];
    })
    .join("");
}

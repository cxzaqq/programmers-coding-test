//my answer
const solution = (n) => {
  const bin = [...n.toString(2)];
  const count = bin.reduce((a, c) => a + (c === "1"), 0);
  let i = n + 1;
  let binI, countI;
  while (true) {
    binI = [...i.toString(2)];
    countI = binI.reduce((a, c) => a + (c === "1"), 0);
    if (count === countI) break;
    i++;
  }
  return parseInt(binI.join(""), 2);
};

//most liked answer
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

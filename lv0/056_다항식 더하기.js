//my answer
const solution = (x) => {
  let xArr = [];
  let nxArr = [];
  let cArr = [];
  x.split(" + ").forEach((e) => {
    if (e.includes("x")) {
      xArr.push(e);
    } else {
      cArr.push(Number(e));
    }
  });
  xArr.forEach((e) => {
    if (e === "x") {
      nxArr.push(1);
    } else if (e.length >= 2) {
      let a = [];
      a = e.split("");
      a.pop();
      a = Number(a.join(""));
      nxArr.push(a);
    }
  });
  let xSum;
  let cSum;
  if (nxArr.length === 0) {
    xSum = 0;
  } else {
    xSum = nxArr.reduce((a, b) => a + b);
  }
  if (cArr.length === 0) {
    cSum = 0;
  } else {
    cSum = cArr.reduce((a, b) => a + b);
  }
  //둘 다 0일 때
  if (xSum === 0 && cSum === 0) {
    return "0";
  }
  //x항만 0일 때
  else if (xSum === 0 && cSum !== 0) {
    return cSum.toString();
  }
  //상수항만 0일 때
  else if (xSum !== 0 && cSum === 0) {
    if (xSum === 1) {
      return "x";
    } else {
      return xSum.toString() + "x";
    }
  }
  //둘 다 0 아닐 때
  else {
    if (xSum === 1) {
      return "x + " + cSum.toString();
    } else {
      return xSum.toString() + "x" + " + " + cSum.toString();
    }
  }
};

//most liked answer
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + +cur, 0);
  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + +cur, 0);
  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
/*
arr.map(n => n.replace("x", "") || 1)
2x의 경우 2가 되고 x의 경우 ""가 아닌 1이 됨
*/

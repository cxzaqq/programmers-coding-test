//my answer
const solution = (n, arr1, arr2) => {
  arr1.forEach((e, i) => {
    let d1 = n - e.toString(2).length;
    let d2 = n - arr2[i].toString(2).length;
    arr1[i] = [...("0".repeat(d1) + e.toString(2))];
    arr2[i] = [...("0".repeat(d2) + arr2[i].toString(2))];
  });
  arr1.forEach((e1, i1) => {
    e1.forEach((e2, i2) => {
      if (e2 === "0" && arr2[i1][i2] === "0") arr1[i1][i2] = " ";
      else arr1[i1][i2] = "#";
    });
  });
  return arr1.map((v) => v.join(""));
};

//most liked answer
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

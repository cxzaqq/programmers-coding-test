//my answer
const solution = (arr) => {
  let t = 0;
  let bArr = arr;
  let nArr;

  while (1) {
    nArr = bArr.map((v) => {
      if (v >= 50 && v % 2 === 0) return v / 2;
      else if (v < 50 && v % 2 !== 0) return v * 2 + 1;
      else return v;
    });
    if (JSON.stringify(bArr) === JSON.stringify(nArr)) break;
    t++;
    bArr = nArr;
  }
  return t;
};

//most liked answer
function solution(arr) {
  var answer = 0;
  let before = [-1];

  while (!arr.every((e, idx) => e == before[idx])) {
    before = [...arr];

    arr = arr.map((e) => {
      if ((e >= 50) & (e % 2 == 0)) return e / 2;
      if ((e < 50) & (e % 2 != 0)) return e * 2 + 1;
      return e;
    });
    answer++;
  }
  return answer - 1;
}

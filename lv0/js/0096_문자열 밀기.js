//my answer
const solution = (A, B) => {
  let answer = -1;
  let Aarr = [...A];
  let Barr = [...B];
  for (let i = 0; i < Aarr.length; i++) {
    answer++;
    if (JSON.stringify(Aarr) === JSON.stringify(Barr)) {
      break;
    }
    let t = Aarr.pop();
    Aarr.unshift(t);
    if (
      i === Aarr.length - 1 &&
      JSON.stringify(Aarr) !== JSON.stringify(Barr)
    ) {
      answer = -1;
    }
  }
  return answer;
};

//most liked answer
let solution1 = (a, b) => (b + b).indexOf(a);

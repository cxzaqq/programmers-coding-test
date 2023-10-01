//my answer
const solution = (arr) =>
  arr.map((v) => {
    if (v >= 50 && v % 2 === 0) return v / 2;
    else if (v < 50 && v % 2 !== 0) return v * 2;
    else return v;
  });

//most liked answer
const solution1 = (a) =>
  a.map((v) =>
    v >= 50 && v % 2 == 0 ? v / 2 : v < 50 && v % 2 == 1 ? v * 2 : v
  );

//my answer
const solution = (arr, n) => {
  if (arr.length % 2 === 0) {
    arr = arr.map((e, i) => {
      if (i % 2 !== 0) return e + n;
      else return e;
    });
  } else {
    arr = arr.map((e, i) => {
      if (i % 2 === 0) return e + n;
      else return e;
    });
  }
  return arr;
};

//most liked answer
const solution1 = (arr, n) =>
  arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));

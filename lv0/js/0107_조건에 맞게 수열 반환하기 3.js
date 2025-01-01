//my answer
const solution = (arr, k) => {
  return k % 2 === 0 ? arr.map((e) => e + k) : arr.map((e) => e * k);
};

//most liked answer
const solution1 = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

//my answer
const solution = (n) => {
  for (let i = 1; i <= 50; i++) {
    if ((6 * i) % n === 0) return i;
  }
};

//most liked answer
const mSolution = (n) => {
  let piece = 6;
  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }
  return piece / 6;
};

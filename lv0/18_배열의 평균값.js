//my answer
const solution = (numbers) => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

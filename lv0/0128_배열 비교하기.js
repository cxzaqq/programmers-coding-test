//my answer
const solution = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    const a1 = arr1.reduce((a, c) => a + c, 0);
    const a2 = arr2.reduce((a, c) => a + c, 0);
    return a1 === a2 ? 0 : a1 > a2 ? 1 : -1;
  }
  if (arr1.length > arr2.length) return 1;
  return -1;
};

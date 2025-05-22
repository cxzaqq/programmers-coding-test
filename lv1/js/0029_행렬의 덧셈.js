//my answer
const solution = (arr1, arr2) =>
  arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]));

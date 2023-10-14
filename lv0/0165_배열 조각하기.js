//my answer
const solution = (arr, query) => {
  query.forEach((e, i) => {
    i % 2 === 0 ? arr.splice(e + 1, arr.length) : arr.splice(0, e);
  });
  return arr;
};

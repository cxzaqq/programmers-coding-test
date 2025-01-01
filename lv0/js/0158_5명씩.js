//my answer
const solution = (names) =>
  names
    .map((v, i) => {
      if (i % 5 === 0) return v;
    })
    .filter((e) => e !== undefined);

//most liked answer
const solution1 = (names) => names.filter((_, i) => !(i % 5));

//my answer
const solution = (num_list, n) =>
  num_list
    .map((v, i) => {
      if (i % n === 0) return v;
    })
    .filter((e) => e !== undefined);

//most liked answer
const solution1 = (num_list, n) => num_list.filter((_, i) => !(i % n));

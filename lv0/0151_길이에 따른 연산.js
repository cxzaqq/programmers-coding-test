//my answer
const solution = (num_list) =>
  num_list.length > 10
    ? num_list.reduce((a, c) => a + c, 0)
    : num_list.reduce((a, c) => a * c, 1);

//most liked answer
const solution1 = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));

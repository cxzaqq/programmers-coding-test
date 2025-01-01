//my answer
const solution = (num_list) => {
  let a = 0;
  let b = 0;
  num_list.forEach((e, i) => {
    if (i % 2 === 0) a += e;
    else b += e;
  });
  return a >= b ? a : b;
};

//most liked answer
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}

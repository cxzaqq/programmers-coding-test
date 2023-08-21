//my answer
const solution = (num_list, n) => {
  let answer = 0;
  num_list.forEach((e) => {
    if (e === n) answer = 1;
  });
  return answer;
};

// most liked answer
const solution1 = (l, n) => +l.includes(n);

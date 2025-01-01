//my answer
const solution = (order) => {
  let answer = 0;
  order.forEach((e) => {
    if (e.includes("caf")) answer += 5000;
    else answer += 4500;
  });
  return answer;
};

//most liked answer
const solution1 = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);

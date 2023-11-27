//my answer
const solution = (d, budget) => {
  let answer = 0;
  let sum = 0;
  d.sort((a, b) => a - b).forEach((e) => {
    if (sum + e <= budget) {
      sum += e;
      answer++;
    }
  });
  return answer;
};

//most liked answer
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}

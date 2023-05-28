//my answer
const solution = (dots) => {
  let width, height;
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][0] === dots[i][0]) height = Math.abs(dots[0][1] - dots[i][1]);
    if (dots[0][1] === dots[i][1]) width = Math.abs(dots[0][0] - dots[i][0]);
  }
  return width * height;
};

//most liked answer
function solution(dots) {
  let x = [],
    y = [];
  for (let pos of dots) {
    x.push(pop[0]);
    y.push(pop[1]);
  }
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

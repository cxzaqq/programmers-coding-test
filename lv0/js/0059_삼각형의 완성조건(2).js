//my answer
const solution = (sides) => {
  let arr = [];
  sides.sort((a, b) => a - b);
  let i = sides[1] - sides[0] + 1;
  while (sides[1] >= i) {
    arr.push(i);
    i++;
  }
  let j = sides[1] + 1;
  while (sides[0] + sides[1] > j) {
    arr.push(j);
    j++;
  }
  return arr.length;
};

//most liked answer
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

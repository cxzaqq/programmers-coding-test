//my answer
const solution = (sides) => {
  var answer = 2;
  sides.sort((a, b) => {
    return a - b;
  });
  if (sides[0] + sides[1] > sides[2]) answer = 1;
  return answer;
};

//most liked answer
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

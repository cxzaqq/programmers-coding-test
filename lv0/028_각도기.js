//my answer
const solution = (angle) => {
  if (angle === 180) return 4;
  if (angle > 90) return 3;
  if (angle === 90) return 2;
  return 1;
};

//most liked answer
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

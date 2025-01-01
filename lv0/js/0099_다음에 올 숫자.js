//my answer
const solution = (common) => {
  let answer = 0;
  let a = common[0];
  let b = common[1];
  let c = common[2];
  if (b - a === c - b) {
    let g = b - a;
    answer = common[common.length - 1] + g;
  } else {
    let g = b / a;
    answer = common[common.length - 1] * g;
  }
  return answer;
};

//most liked answer
function solution(common) {
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return (common.pop() * common[1]) / common[0];
  }
}

//my answer
//시간 초과
const solution = (ingredient) => {
  let answer = 0;
  let flag = 1;
  let len = -1;
  while (flag) {
    for (let i = 0; i <= ingredient.length - 4; i++) {
      if (
        ingredient[i] === 1 &&
        ingredient[i + 1] === 2 &&
        ingredient[i + 2] === 3 &&
        ingredient[i + 3] === 1
      ) {
        answer++;
        ingredient.splice(i, 4);
        break;
      }
    }
    if (len === ingredient.length) flag = 0;
    len = ingredient.length;
  }
  return answer;
};
//힌트: i를 0으로 초기화하지 않고 낮추기
const solution1 = (ingredient) => {
  let answer = 0;
  let i = 0;
  while (true) {
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      answer++;
      ingredient.splice(i, 4);
      if (i < 4) i = -1;
      else i -= 5;
    }
    i++;
    if (ingredient.length < 4 || i === ingredient.length - 3) break;
  }
  return answer;
};

//most liked answer
function solution(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;
      stk.splice(-4);
    }
  }
  return count;
}

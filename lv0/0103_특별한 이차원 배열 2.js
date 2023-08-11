//my answer
const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }
  return 1;
};

//most liked answer
function solution(arr) {
  return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i]))
    ? 1
    : 0;
}
/*
.every()
모든 요소가 주어진 판별 함수를 통과하는지 테스트. Boolean 반환
*/

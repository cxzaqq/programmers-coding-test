//my answer
const solution = (numbers, k) => {
  let a = -2;
  if (numbers.length % 2 === 0) {
    for (let i = 0; i < k; i++) {
      a += 2;
      if (a === numbers.length) a = 0;
    }
  } else {
    for (let i = 0; i < k; i++) {
      a += 2;
      if (a === numbers.length + 1) a = 1;
      if (a === numbers.length) a = 0;
    }
  }
  return numbers[a];
};

//most liked answer
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
//k-1 후 2를 곱한 만큼의 움직임, 그 움직임이 배열의 길이를 초과할 때 배열의 길이로 모듈러 연산

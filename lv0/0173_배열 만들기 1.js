//my answer
const solution = (n, k) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) answer.push(i);
  }
  return answer;
};

//most liked answer
const solution1 = (n, k) =>
  Array(~~(n / k))
    .fill(k)
    .map((v, i) => v * (i + 1));

/*
~는 Not 비트 연산자
~~하면 소수점 버릴 수 있음
*/

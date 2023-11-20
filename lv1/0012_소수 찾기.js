//my answer
const solution = (n) => {
  //배열의 인덱스는 0부터 시작하므로 0 ~ n => n+1개
  const arr = new Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    // 이미 소수가 아닌 인덱스는 건너뛴다.
    if (arr[i] === false) continue;
    // 소수가 아닌 데이터는 false로 입력한다.
    for (let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }
  //true인 0, 1 제외
  return arr.filter((e) => e === true).length - 2;
};

//most liked answer
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

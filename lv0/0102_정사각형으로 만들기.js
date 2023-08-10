//my answer
function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;
  const d = Math.abs(row - col);
  if (row > col) {
    const a = Array(d).fill(0);
    return arr.map((e) => [...e, ...a]);
  }
  if (row < col) {
    for (let i = 0; i < d; i++) {
      const a = Array(col).fill(0);
      arr.push(a);
    }
  }
  return arr;
}

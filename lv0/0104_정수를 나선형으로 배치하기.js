//my answer
const solution = (n) => {
  let arr = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 0;
  let right = 0;
  let down = 1;
  let left = 0;
  let up = 0;
  while (num !== n * n) {
    for (let i = right; i < n - right; i++) {
      arr[right][i] = ++num;
    }
    right++;

    for (let i = down; i <= n - down; i++) {
      arr[i][n - down] = ++num;
    }
    down++;

    for (let i = n - 2 - left; i >= left; i--) {
      arr[n - 1 - left][i] = ++num;
    }
    left++;

    for (let i = n - 2 - up; i > up; i--) {
      arr[i][up] = ++num;
    }
    up++;
  }

  return arr;
};

//most liked answer
function solution(n) {
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const answer = Array.from(new Array(n), () => new Array(n).fill(0));
  let x = 0,
    y = 0,
    dir = 0,
    num = 1;
  while (num <= n * n) {
    answer[x][y] = num;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (
      nextX >= n ||
      nextX < 0 ||
      nextY >= n ||
      nextY < 0 ||
      answer[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
    num++;
  }
  return answer;
}

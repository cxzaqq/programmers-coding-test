//my answer 효율성 테스트 실패
const solution = (board) => {
  let squares = [0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        let hmax = board[0].length - j;
        let vmax = board.length - i;
        let max = Math.min(hmax, vmax);
        for (let k = 1; k <= max; k++) {
          let cache = [];
          for (let l = 0; l < k; l++) {
            for (let m = 0; m < k; m++) {
              cache.push(board[i + l][j + m]);
            }
          }
          if (!cache.includes(0)) squares.push(cache.length);
        }
      }
    }
  }
  return Math.max(...squares);
};

//most liked answer
const solution1 = (board) => {
  let answer = 0;
  const r = board.length;
  const c = board[0].length;

  let t = 0;
  if (r <= 1 || c <= 1) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        t += board[i][j];
      }
    }
    if (t) return 1;
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (board[i][j]) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const leftCross = board[i - 1][j - 1];
        const min = Math.min(up, left, leftCross);
        board[i][j] = min + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return Math.pow(answer, 2);
};

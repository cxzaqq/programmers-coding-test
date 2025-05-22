//my answer
const solution = (board, moves) => {
  let answer = 0;
  let basket = [];
  moves.forEach((e) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][e - 1] !== 0) {
        if (basket[basket.length - 1] === board[i][e - 1]) {
          basket.pop();
          board[i][e - 1] = 0;
          answer += 2;
          break;
        }
        basket.push(board[i][e - 1]);
        board[i][e - 1] = 0;
        break;
      }
    }
  });
  return answer;
};

//most liked answer
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution1 = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

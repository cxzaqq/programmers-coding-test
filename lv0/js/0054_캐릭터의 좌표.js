//my answer
const solution = (keyInput, board) => {
  let position = [0, 0];
  keyInput.forEach((e) => {
    switch (e) {
      case "left":
        if (position[0] > -Math.floor(board[0] / 2)) {
          position[0]--;
        }
        break;
      case "right":
        if (position[0] < Math.floor(board[0] / 2)) {
          position[0]++;
        }
        break;
      case "down":
        if (position[1] > -Math.floor(board[1] / 2)) {
          position[1]--;
        }
        break;
      case "up":
        if (position[1] < Math.floor(board[1] / 2)) {
          position[1]++;
        }
        break;
    }
  });
  return position;
};

//most liked answer
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}

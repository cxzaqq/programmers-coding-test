//my answer
const solution = (board) => {
  let answer = 0;
  let bomb = [];
  let danger = [];
  let arr = Array.from(Array(board.length), () =>
    new Array(board.length).fill(0)
  );

  board.forEach((a, i) =>
    a.forEach((b, j) => {
      if (b === 1) bomb.push([i, j]);
    })
  );

  bomb.forEach((e) => {
    danger.push(e);
    if (e[0] - 1 >= 0 && e[1] - 1 >= 0) {
      danger.push([e[0] - 1, e[1] - 1]);
    }
    if (e[0] - 1 >= 0) {
      danger.push([e[0] - 1, e[1]]);
    }
    if (e[0] - 1 >= 0 && e[1] + 1 < board.length) {
      danger.push([e[0] - 1, e[1] + 1]);
    }
    if (e[1] - 1 >= 0) {
      danger.push([e[0], e[1] - 1]);
    }
    if (e[1] + 1 < board.length) {
      danger.push([e[0], e[1] + 1]);
    }
    if (e[0] + 1 < board.length && e[1] - 1 >= 0) {
      danger.push([e[0] + 1, e[1] - 1]);
    }
    if (e[0] + 1 < board.length) {
      danger.push([e[0] + 1, e[1]]);
    }
    if (e[0] + 1 < board.length && e[1] + 1 < board.length) {
      danger.push([e[0] + 1, e[1] + 1]);
    }
  });

  danger = [...new Set(danger.join(" ").split(" "))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
  console.log(danger);

  danger.forEach((a) => {
    arr[a[0]][a[1]] = 1;
  });

  arr.forEach((a) => {
    a.forEach((b) => {
      if (b === 0) answer++;
    });
  });

  return answer;
};

//most liked answer
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;
  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => {
        console.log(ox, oy, !!self[oy + y]?.[ox + x], safezone);

        return !!self[oy + y]?.[ox + x];
      })
        ? false
        : safezone++;
    })
  );
  return safezone;
}
/*
forEach 중첩 가능
!undefined === true
!!undefined === false
*/

//my answer
const solution = (maps) => {
  let answer = 1;

  //상하좌우
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  //지나간 곳 표시
  let passed = maps;

  //최대 크기
  let maxX = maps.length - 1;
  let maxY = maps[0].length - 1;

  //BFS 큐
  let queue = [[0, 0]];
  passed[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;
    //큐 안에 있는 거 다 검사
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      //해당 큐에 모든 방위 검사
      for (let j = 0; j < 4; j++) {
        let cx = x + dx[j];
        let cy = y + dy[j];

        //갈 수 있다면 큐에 추가
        if (
          cx >= 0 &&
          cy >= 0 &&
          cx <= maxX &&
          cy <= maxY &&
          passed[cx][cy] === 1
        ) {
          if (cx === maxX && cy === maxY) return answer + 1;
          queue.push([cx, cy]);
          passed[cx][cy] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
};

//most liked answer
function solution(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  var queue = [[0, 0]];

  var visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  );

  var result = 0;

  while (queue.length) {
    result++;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var point = queue.shift();
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1)
        queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1)
        queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}

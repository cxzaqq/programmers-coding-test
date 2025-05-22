//my answer
const solution = (park, routes) => {
  let [x, y] = [0, 0];
  park.forEach((e, i) => {
    if (e.includes("S")) [x, y] = [i, e.indexOf("S")];
  });
  //시작점을 찾아도 그 뒤까지 모두 검사함

  let possible, op, n;

  routes.forEach((e, i) => {
    possible = true;
    [op, n] = [e.split(" ")[0], e.split(" ")[1]];
    //[op, n] = [e.split(" ")]; 로 해도 됨

    if (op === "E") {
      for (let ei = 1; ei <= n; ei++) {
        if ((park[x]?.split("")[y + ei] ?? "X") === "X") {
          possible = false;
        }
      }
      if (possible) y = y + +n;
    }
    if (op === "W") {
      for (let wi = 1; wi <= n; wi++) {
        if ((park[x]?.split("")[y - wi] ?? "X") === "X") {
          possible = false;
        }
      }
      if (possible) y = y - +n;
    }
    if (op === "S") {
      for (let si = 1; si <= n; si++) {
        if ((park[x + si]?.split("")[y] ?? "X") === "X") {
          possible = false;
        }
      }
      if (possible) x = x + +n;
    }
    if (op === "N") {
      for (let ni = 1; ni <= n; ni++) {
        if ((park[x - ni]?.split("")[y] ?? "X") === "X") {
          possible = false;
        }
      }
      if (possible) x = x - +n;
    }
  });
  //코드가 많이 반복됨
  return [x, y];
};

//most liked answer
function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}

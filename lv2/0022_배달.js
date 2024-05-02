const N = 6;
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const K = 4;

function solution(N, road, K) {
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    // 연결되어 있는 경로를 모두 lines배열에 저장한다.
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  console.log("lines", lines);
  console.log("arr", arr);

  while (queue.length) {
    console.log("queue[0]", queue[0]);
    let { to } = queue.pop();
    console.log("to", to);
    console.log("lines[to]", lines[to]);
    lines[to].forEach((next) => {
      console.log("forEach value", next);
      // 모든 경로를 탐색
      console.log("arr[next.to]", arr[next.to]);
      console.log("arr[to] + next.cost", arr[to] + next.cost);
      if (arr[next.to] > arr[to] + next.cost) {
        // 기존에 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장함
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
    console.log(arr);
  }

  return arr.filter((item) => item <= K).length; // 경로의 제한인 K보다 cost가 작은 경로의 수를 반환을 함
}

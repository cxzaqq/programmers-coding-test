//my answer
const solution = (players, callings) => {
  let ranks = {};
  let names = {};
  players.forEach((e, i) => {
    names[e] = i;
    ranks[i] = e;
  });
  callings.forEach((e, i) => {
    const front = ranks[names[e] - 1];
    const frontRank = names[e] - 1;
    const callRank = names[e];
    names[e] -= 1;
    names[front] += 1;
    ranks[frontRank] = e;
    ranks[callRank] = front;
  });
  return Object.values(ranks);
};

//most liked answer
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  players.forEach((name, index) => (idxList[name] = index));
  for (let call of callings) {
    idx = idxList[call];
    name1 = players[idx];
    name2 = players[idx - 1];
    idxList[call] -= 1;
    idxList[name2] += 1;
    players[idx] = name2;
    players[idx - 1] = name1;
  }

  return players;
}

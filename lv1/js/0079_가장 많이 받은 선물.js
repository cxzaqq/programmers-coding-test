//my answer
const solution = (friends, gifts) => {
  //선물 받은 수
  let receive = {};
  //선물 준 수
  let give = {};
  //선물 지수 = 준 수 - 받은 수
  let gNum = {};
  //주고 받은 내역
  let history = {};
  //다음 달 예측
  let predict = {};

  friends.forEach((e) => {
    receive[e] = 0;
    give[e] = 0;
    gNum[e] = 0;
    predict[e] = 0;
  });

  gifts.forEach((e) => {
    let [giver, receiver] = e.split(" ");
    give[giver]++;
    receive[receiver]++;
    history[e] === undefined ? (history[e] = 1) : history[e]++;
  });

  //선물 지수 gNum
  friends.forEach((e) => (gNum[e] = give[e] - receive[e]));

  //주고 받은 내역 배열로
  let historyArr = [];

  Object.keys(history).forEach((e) => historyArr.push([e, history[e]]));

  //전체 관계 구하기
  let rel = [];

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      rel.push([[friends[i], friends[j]].join(" "), 0]);
    }
  }

  //전체 관계에 historyArr 적용
  historyArr.forEach((e) => {
    for (let i = 0; i < rel.length; i++) {
      if (e[0] === rel[i][0]) {
        rel[i][1] = rel[i][1] + e[1];
        break;
      }
      let [g, r] = e[0].split(" ");
      if ([r, g].join(" ") === rel[i][0]) {
        rel[i][1] = rel[i][1] - e[1];
        break;
      }
    }
  });

  //rel을 기반으로 predict 구하기
  rel.forEach((e) => {
    let [g, r] = e[0].split(" ");
    //주고 받은 선물이 없거나 수가 같을 때
    if (e[1] === 0) {
      if (gNum[g] > gNum[r]) predict[g]++;
      if (gNum[g] < gNum[r]) predict[r]++;
    }
    if (e[1] > 0) predict[g]++;
    if (e[1] < 0) predict[r]++;
  });

  return Math.max(...Object.values(predict));
};

//most liked answer
function solution(friends, gifts) {
  const length = friends.length;
  const giftPoints = new Array(length).fill(0);
  const index = {};
  const record = [];
  const points = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    record[i] = new Array(length).fill(0);
    index[friends[i]] = i;
  }
  for (const gift of gifts) {
    const [giver, taker] = gift.split(" ");
    record[index[giver]][index[taker]] += 1;
    giftPoints[index[giver]] += 1;
    giftPoints[index[taker]] -= 1;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (record[i][j] > record[j][i]) {
        points[i] += 1;
      } else if (record[i][j] === record[j][i]) {
        if (giftPoints[i] > giftPoints[j]) {
          points[i] += 1;
        }
      }
    }
  }
  return Math.max(...points);
}

//my answer
const solution = (lottos, win_nums) => {
  const arr = [6, 6, 5, 4, 3, 2, 1];
  let z = 0;
  let r = 0;
  lottos.forEach((e) => {
    if (win_nums.includes(e)) r++;
    if (e === 0) z++;
  });
  return [arr[z + r], arr[r]];
};

//most liked answer
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

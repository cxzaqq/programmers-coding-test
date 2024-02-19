//my answer
const solution = (keymap, targets) => {
  let answer = [];
  let t, k;
  targets.forEach((e1, i1) => {
    t = 0;
    [...e1].forEach((e2, i2) => {
      k = 101;
      keymap.forEach((e3, i3) => {
        if (e3.includes(e2) && k >= e3.indexOf(e2) + 1) k = e3.indexOf(e2) + 1;
      });
      k === 101 ? (t -= 10000) : (t += k);
    });
    t < 0 ? answer.push(-1) : answer.push(t);
  });
  return answer;
};

//most liked answer
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

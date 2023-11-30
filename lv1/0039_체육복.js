//my answer
const solution = (n, lost, reserve) => {
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(reserve.indexOf(reserve[i]), 1);
      i--;
    }
  }
  let one = n - lost.length - reserve.length;
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      lost.splice(lost.indexOf(reserve[i] - 1), 1);
      one++;
      continue;
    }
    if (lost.includes(reserve[i] + 1)) {
      lost.splice(lost.indexOf(reserve[i] + 1), 1);
      one++;
      continue;
    }
  }
  return n - lost.length;
};

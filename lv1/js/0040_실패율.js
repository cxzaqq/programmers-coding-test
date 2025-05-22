//my answer
const solution = (N, stages) => {
  const reach = {};
  const notClear = {};
  const failure = {};
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    reach[i] = 0;
    notClear[i] = 0;
    failure[i] = 0;
  }
  stages.forEach((e) => {
    for (let i = 1; i <= e; i++) {
      if (reach[i] || reach[i] === 0) reach[i]++;
    }
    if (notClear[e] || notClear[e] === 0) notClear[e]++;
  });
  for (let i = 1; i <= N; i++) {
    failure[i] = notClear[i] / reach[i];
  }

  let sortable = [];
  for (let k in failure) {
    sortable.push([k, failure[k]]);
  }
  sortable.sort((a, b) => b[1] - a[1]);

  let answer = [];
  for (let i = 0; i < sortable.length; i++) {
    answer.push(+sortable[i][0]);
  }
  return answer;
};

//most liked answer
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

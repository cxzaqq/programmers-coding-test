//my answer
const solution = (id_list, report, k) => {
  let arr = [...new Set(report)].map((v) => v.split(" "));
  const reportedObj = {};
  arr.forEach((e) =>
    reportedObj[e[1]] ? reportedObj[e[1]]++ : (reportedObj[e[1]] = 1)
  );
  arr.forEach((e) => (reportedObj[e[1]] >= k ? e.push(1) : e.push(0)));
  arr = arr.filter((e) => e[2] === 1);
  const reportObj = {};
  id_list.forEach((e) => (reportObj[e] = 0));
  arr.forEach((e) => reportObj[e[0]]++);
  return Object.values(reportObj);
};

//most liked answer
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

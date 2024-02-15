//my answer
const solution = (today, terms, privacies) => {
  let answer = [];
  let obj = {};
  let r, year, month, day, expDate;
  terms.forEach((e, i) => {
    obj[e.split(" ")[0]] = e.split(" ")[1];
  });
  privacies.forEach((e, i) => {
    month = +e.split(" ")[0].split(".")[1] + +obj[e.split(" ")[1]];
    if (month > 12) {
      r = Math.floor(month / 12);
      month -= 12 * r;
      if (month === 0) {
        month = 12;
        r -= 1;
      }
    } else r = 0;
    year = +e.split(" ")[0].split(".")[0] + r;
    day = +e.split(" ")[0].split(".")[2];
    if (day === 1) {
      day = 28;
      if (month === 1) {
        year -= 1;
        month = 12;
      } else month -= 1;
    } else day -= 1;
    year = year.toString();
    month =
      month.toString().length === 1 ? "0" + month.toString() : month.toString();
    day = day.toString().length === 1 ? "0" + day.toString() : day.toString();
    if (today > [year, month, day].join(".")) answer.push(i + 1);
  });
  return answer;
};

//most liked answer
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}

//my answer
const solution = (s) => {
  let answer = "";
  let sArr = s.split("");
  let aArr = [];

  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      aArr.push(item);
    }
  });
  answer = aArr.sort().join("");
  return answer;
};

//most liked answer
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

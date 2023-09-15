//my answer
const solution = (myStr) => {
  let arr = [];
  myStr.split("").forEach((e) => {
    if (e === "a" || e === "b" || e === "c") arr.push(".");
    else arr.push(e);
  });
  const answer = arr
    .join("")
    .split(".")
    .filter((e) => e.length > 0);
  return answer.length === 0 ? ["EMPTY"] : answer;
};

//most liked answer
const solution1 = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];
/*
[^a-c]: a, b, c가 아닌 것
g는 모두
+는 결과를 합침
예를 들어
"abcdddabdd".match(/[^a-c]+/g);
=> ['ddd', 'dd']
"abcdddabdd".match(/[^a-c]/g);
=> ['d', 'd', 'd', 'd', 'd']
*/

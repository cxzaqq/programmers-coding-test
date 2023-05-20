//my answer
const solution = (rsp) => {
  return [...rsp]
    .map((e) => {
      if (e === "2") return "0";
      if (e === "0") return "5";
      if (e === "5") return "2";
    })
    .join("");
};

//most liked answer
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

//my answer
const solution = (str_list, ex) => {
  let answer = "";
  str_list.forEach((e) => {
    if (!e.includes(ex)) answer += e;
  });
  return answer;
};

//most liked answer
function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    return acc + cur;
  }, "");
}

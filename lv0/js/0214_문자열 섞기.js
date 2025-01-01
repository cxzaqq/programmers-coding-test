//my answer
const solution = (str1, str2) => {
  let str = "";
  [...str1].forEach((e, i) => {
    str += e + [...str2][i];
  });
  return str;
};

//most liked answer
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}

//my answer
const solution = (my_string, m, c) => {
  let arr = [];
  let answer = "";
  for (let i = 0; i < my_string.length / m; i++) {
    arr.push([...my_string.slice(i * m, i * m + m)]);
  }
  arr.forEach((e) => (answer += e[c - 1]));
  return answer;
};

//most liked answer
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}

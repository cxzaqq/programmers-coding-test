//my answer
const solution = (my_string, queries) => {
  queries.forEach((e) => {
    my_string = [
      my_string.slice(0, e[0]),
      [...my_string.slice(e[0], e[1] + 1)].reverse().join(""),
      my_string.slice(e[1] + 1, my_string.length),
    ].join("");
  });
  return my_string;
};

//most liked answer
function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}

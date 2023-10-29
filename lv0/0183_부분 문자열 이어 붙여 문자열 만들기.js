//my answer
const solution = (my_strings, parts) =>
  my_strings.map((e, i) => e.slice(parts[i][0], parts[i][1] + 1)).join("");

//most liked answer
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}

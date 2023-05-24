//my answer
const solution = (my_string) => {
  const gather = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((e) => !gather.includes(e)).join("");
};

//most liked answer
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

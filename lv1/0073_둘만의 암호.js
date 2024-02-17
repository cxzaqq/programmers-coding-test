//my answer
const solution = (s, skip, index) => {
  let arr = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ];
  let ind;
  arr = arr.filter((e) => !skip.includes(e));
  return [...s].reduce((a, c) => {
    if (arr.indexOf(c) + index >= arr.length)
      ind = (arr.indexOf(c) + index) % arr.length;
    else ind = arr.indexOf(c) + index;
    return a + arr[ind];
  }, "");
};

//most liked answer
function solution(s, skip, index) {
  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ].filter((c) => !skip.includes(c));
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join("");
}

//my answer
const solution = (q, r, code) =>
  code
    .split("")
    .filter((v, i) => i % q === r)
    .join("");

//most liked answer
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}

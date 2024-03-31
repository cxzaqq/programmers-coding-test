//my answer
const solution = (s) => {
  s = s.split(" ").map((v) => {
    if (v === "") return v;
    if (isNaN(v[0])) {
      v = v.toLowerCase().split("");
      v[0] = v[0].toUpperCase();
      return v.join("");
    } else return v.toLowerCase();
  });
  return s.join(" ");
};

//most liked answer
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

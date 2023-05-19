//my answer
const solution = (emergency) => {
  let arr = emergency.slice().sort((a, b) => b - a);
  return emergency.map((e) => arr.indexOf(e) + 1);
};
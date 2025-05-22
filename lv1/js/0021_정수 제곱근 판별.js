//my answer
const solution = (n) =>
  Math.sqrt(n).toString().includes(".") ? -1 : (Math.sqrt(n) + 1) ** 2;

//most liked answer
function nextSqaure(n) {
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no";
  }
}

//my answer
const solution = (numlist, n) => {
  return numlist.sort((a, b) => {
    const [ad, bd] = [Math.abs(a - n), Math.abs(b - n)];
    if (ad === bd) return b - a;
    return ad - bd;
  });
};

//most liked answer
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

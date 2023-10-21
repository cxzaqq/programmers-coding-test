//my answer
const solution = (my_string) => {
  let arr = Array(52).fill(0);
  my_string
    .split("")
    .map((v) => {
      if (v.charCodeAt() < 91) return v.charCodeAt() - 65;
      else return v.charCodeAt() - 71;
    })
    .forEach((e) => (arr[e] += 1));
  return arr;
};

//most liked answer
function solution(m) {
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

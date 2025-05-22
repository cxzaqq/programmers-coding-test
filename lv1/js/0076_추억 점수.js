//my answer
const solution = (name, yearning, photo) => {
  let obj = {};
  name.forEach((e, i) => {
    obj[e] = yearning[i];
  });
  return photo.map((v, i) =>
    v.filter((e) => name.includes(e)).reduce((a, c) => a + obj[c], 0)
  );
};

//most liked answer
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}

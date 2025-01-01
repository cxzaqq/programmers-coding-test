//my answer
const solution = (myString) =>
  myString
    .split("x")
    .filter((e) => e.length > 0)
    .sort();

//most liked answer
const solution1 = (s) => s.match(/[^x]+/g).sort();

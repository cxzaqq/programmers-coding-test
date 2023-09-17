//my answer
const solution = (myString, pat) => {
  let arr = [];
  [...myString].forEach((e) => (e === "A" ? arr.push("B") : arr.push("A")));
  return arr.join("").includes(pat) ? 1 : 0;
};

//most liked answer
const solution1 = (myString, pat) =>
  [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;

//my answer
const solution = (myString) =>
  myString
    .split("")
    .map((v) => {
      if (v === "a") return "A";
      else if (v === "A") return v;
      else return v.toLowerCase();
    })
    .join("");

//most liked answer
const solution1 = (s) => s.toLowerCase().replaceAll("a", "A");

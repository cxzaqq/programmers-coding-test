//my answer
const solution = (n) =>
  new Array(n)
    .fill("수")
    .map((e, i) => {
      if (i % 2 === 0) return e;
      return "박";
    })
    .join("");

//most liked answer
var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");

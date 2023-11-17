//my answer
const solution = (s) => {
  let p = 0;
  let y = 0;
  [...s.toLowerCase()].forEach((e) => {
    if (e === "p") p++;
    if (e === "y") y++;
  });
  return p === y ? true : false;
};

//most liked answer
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

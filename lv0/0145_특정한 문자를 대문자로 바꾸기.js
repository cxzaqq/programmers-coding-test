//my answer
const solution = (my_string, alp) =>
  my_string
    .split("")
    .map((v) => {
      if (v === alp) return v.toUpperCase();
      else return v;
    })
    .join("");

//most liked answer
const solution1 = (s, a) => s.replaceAll(a, a.toUpperCase());

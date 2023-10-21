//my answer
const solution = (my_string, indices) => {
  my_string = my_string.split("");
  indices.forEach((e) => {
    my_string[e] = ".";
  });
  return my_string.filter((v) => v !== ".").join("");
};

//most liked answer
const solution1 = (s, d) => [...s].filter((v, i) => !d.includes(i)).join("");

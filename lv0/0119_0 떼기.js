//my answer
const solution = (n_str) => {
  let arr = [...n_str];
  while (arr[0] == !"0") {
    arr = arr.splice(1);
  }
  return arr.join("");
};

//most liked answer
const solution1 = (str) => String(Number(str));

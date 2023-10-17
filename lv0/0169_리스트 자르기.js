//my answer
const solution = (n, slicer, num_list) => {
  if (n === 1) return num_list.slice(0, slicer[1] + 1);
  if (n === 2) return num_list.slice(slicer[0], num_list.length + 1);
  if (n === 3) return num_list.slice(slicer[0], slicer[1] + 1);
  return num_list
    .slice(slicer[0], slicer[1] + 1)
    .map((v, i) => {
      if (i % slicer[2] === 0) return v;
    })
    .filter((e) => e !== undefined);
};

//most liked answer
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}

/*
굳이 map 후에 filter 하지 말고 그냥 filter
*/

//my answer
const solution = (todo_list, finished) =>
  todo_list
    .map((v, i) => {
      if (finished[i] === false) return v;
    })
    .filter((e) => e !== undefined);

//most liked answer
const solution1 = (todo_list, finished) =>
  todo_list.filter((e, i) => !finished[i]);

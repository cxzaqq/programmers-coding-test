//my answer
const solution = (arr, delete_list) => {
  let answer = arr;
  for (let i = 0; i < delete_list.length; i++) {
    answer = answer.filter((e) => e !== delete_list[i]);
  }
  return answer;
};

//most liked answer
const solution1 = (arr, dels) => arr.filter((el) => !dels.includes(el));
/*
arr.includes()도 가능
*/

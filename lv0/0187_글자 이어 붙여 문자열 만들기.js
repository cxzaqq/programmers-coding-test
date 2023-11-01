//my answer
const solution = (my_string, index_list) => {
  const answer = [];
  index_list.forEach((e, i) => {
    answer.push([...my_string][e]);
  });
  return answer.join("");
};

//most liked answer
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

/*
string[i]도 된다!
*/

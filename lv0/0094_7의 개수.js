//my answer
const solution = (array) => {
  const str = array.join();
  let answer = str.match(/7/g);
  if (answer === null) {
    return 0;
  }
  return answer.length;
};

//most liked answer
function solution(array) {
  return array.join("").split("7").length - 1;
}
/*
ex) "7177737".split("7")
    7   1   7   7   7   3   7
 ['',  '1',  '', '',   '3',   '']
*/

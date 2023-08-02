//my answer
const solution = (my_str, n) => {
  let answer = [];
  let tempt = Math.ceil(my_str.length / n);
  for (let i = 0; i < tempt; i++) {
    answer.push(my_str.slice(i * n, (i + 1) * n));
  }
  return answer;
};

//most liked answer
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
/*
str.match(regexp)
new RegExp(`.{1,${n}}`, "g") === /.{1,${n}}/g
const str = "123456789";
str.match(/./g) === str.match(/.{1}/g) => ['1', '2', '3', '4', .. '9']
str.match(/.{1,2}/g) => ['12', '34', '56', '78', '9']
*/

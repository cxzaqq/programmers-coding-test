//my answer
const solution = (my_string) => {
  var answer = "";
  var array = my_string.split("");
  var aArr = [];
  for (var i = 0; i < array.length; i++) {
    if (aArr.includes(array[i])) continue;
    else aArr.push(array[i]);
  }
  answer = aArr.join("");
  return answer;
};

//most liked answer
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
/*
Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장
const str = "people";
console.log(new Set(str));      // {'p', 'e', 'o', 'l'}
console.log([...new Set(str)])  // ['p', 'e', 'o', 'l']
*/

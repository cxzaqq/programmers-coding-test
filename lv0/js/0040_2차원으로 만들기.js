//my answer
const solution = (num_list, n) => {
  let arr = new Array(num_list.length / n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
  }
  let a = 0;
  for (let i = 0; i < num_list.length / n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = num_list[a++];
    }
  }
  return arr;
};

//most liked answer
function solution(num_list, n) {
  var answer = [];
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}
//splice() 사용 시 반환값이 원본 배열을 변경함

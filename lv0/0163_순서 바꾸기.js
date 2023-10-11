//my answer
const solution = (num_list, n) => {
  if (n === num_list.length) return num_list;
  let left = num_list.slice(0, n);
  let right = num_list.slice(n + 1, num_list.length);
  return [num_list[n], ...right, ...left];
};

//most liked answer
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}
/*
slice()는 원본 유지, splice()는 원본 변경
즉 num_list.splice(0, n) 하면 num_list에서 0번 인덱스부터 n개의 요소가 제거된 배열이 됨
근데 이걸 변수에 담으면 제거된 요소의 배열이 담김
즉 n개의 요소가 제거된 배열에 해당 제거된 요소들을 push
*/

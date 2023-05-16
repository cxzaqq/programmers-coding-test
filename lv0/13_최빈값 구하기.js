//my answer
const solution = (array) => {
  const obj = {};
  const arr = [];
  array.forEach((e) => {
    //키, 값 삽입 키에대한 값이 없으면 1로 시작
    obj[e] = ++obj[e] || 1;
  });
  //각 키, 값을 2차원 배열로 삽입
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  //값을 오름차순으로 정렬
  arr.sort((a, b) => b[1] - a[1]);
  //같은 값이 있으면 -1 반환
  if (arr.length > 1 && arr[0][1] === arr[1][1]) return -1;
  return Number(arr[0][0]);
};

//most liked answer
function solution(array) {
  let m = new Map();
  //map.set(key, value) - key를 이용해 value를 저장
  //map.get(key) - key에 해당하는 값을 반환 없으면 undefined 반환
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  //2차원 배열로 저장(오름차순)
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

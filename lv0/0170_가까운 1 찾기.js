//my answer
const solution = (arr, idx) => {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }
  return -1;
};

//most liked answer
const solution1 = (a, i) => a.indexOf(1, i);
/*
.indexOf(searchElement, fromIndex)
fromIndex: 검색을 시작할 위치
*/

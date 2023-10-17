//my answer
const solution = (num_list) => {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
};

//most liked answer
const solution1 = (num_list) => num_list.findIndex((v) => v < 0);

/*
.findIndex(callbackFn)
callbackFn이 참인 값을 반환할 때까지 반복. 참이 없으면 -1 반환
*/

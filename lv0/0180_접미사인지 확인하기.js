//my answer
const solution = (my_string, is_suffix) =>
  is_suffix ===
  my_string.slice(my_string.length - is_suffix.length, my_string.length)
    ? 1
    : 0;

//most liked answer
const solution1 = (str, suff) => (str.endsWith(suff) ? 1 : 0);
/*
str.endsWith(searchString[, length])
str이 searchString으로 끝나는지 검사 후 true, false 반환
length 추가 시 해당 길이까지만 검사
*/

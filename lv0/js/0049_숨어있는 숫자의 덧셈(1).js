//my answer
const solution = (my_string) => {
  return my_string
    .replace(/[a-zA-Z]/g, "")
    .split("")
    .reduce((a, b) => a + +b, 0);
};

//most liked answer
function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((arr, curr) => acc + +curr, 0);
}
// [^0-9]는 숫자를 제외한 모든 문자

// not with regex
function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}

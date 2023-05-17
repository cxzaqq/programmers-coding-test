//my answer
const solution = (numbers, num1, num2) => {
  return numbers.slice(num1, num2 + 1);
};

//most liked answer
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}
/*
slice splice?
slice()는 begin부터 end(미포함)까지에 대한 얕은 복사본을 새로운 배열 객체로 반환
원본은 바뀌지 않음

splice()는 배열의 기존 요소를 삭제, 교체 또는 추가하여 배열의 내용을 변경
splice(a, b)에서 a는 배열의 변경을 시작할 인덱스
b는 배열에서 제거할 요소의 수(원본 배열에 영향)
*/

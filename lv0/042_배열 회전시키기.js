//my answer
const solution = (numbers, direction) => {
  let temp;
  if (direction === "right") {
    temp = numbers[numbers.length - 1];
    for (let i = numbers.length - 1; i > 0; i--) {
      numbers[i] = numbers[i - 1];
    }
    numbers[0] = temp;
  } else {
    temp = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
      numbers[i] = numbers[i + 1];
    }
    numbers[numbers.length - 1] = temp;
  }
  return numbers;
};

//most liked answer
function solution(numbers, direction) {
  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
}
/*
.unshift() : 새로운 요소를 배열의 맨 앞쪽에 추가하고 새로운 길이를 반환
.pop() : 배열의 마지막 요소를 제거하고 그 요소를 반환

.push() : 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환
.shift() : 배열의 첫 번째 요소를 제거하고 그 요소를 반환
*/

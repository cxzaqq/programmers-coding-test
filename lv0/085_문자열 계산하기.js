//my answer
function solution(my_string) {
  let answer = 0;
  let arr = my_string.split(" ");
  let numArr = [];
  let opArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "+" && arr[i] !== "-") {
      numArr.push(Number(arr[i]));
      continue;
    }
    opArr.push(arr[i]);
  }
  answer = answer + numArr[0];
  for (let i = 0; i < opArr.length; i++) {
    if (opArr[i] === "+") {
      answer = answer + numArr[i + 1];
    } else {
      answer = answer - numArr[i + 1];
    }
  }
  return answer;
}

//most liked answer
var solution = eval;
/*
eval()은 문자로 표현된 JS 코드를 계산해주는 함수
값이 없으면 undefined 반환

eval을 절대 사용하지 말 것
eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수.
악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행 시 웹페이지나 확장 프로그램의 권한으로
사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있음...
*/

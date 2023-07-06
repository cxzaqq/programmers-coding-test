//my answer
const solution = (order) => {
  var answer = 0;
  var order = order.toString().split("");
  for (var i = 0; i < order.length; i++) {
    if (order[i] === "3" || order[i] === "6" || order[i] === "9") answer++;
  }
  return answer;
};

//most liked answer
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
/*
matchAll(regex)
자신을 호출한 문자열과 정규식과의 매칭 결과(그룹 캡처를 포함)를 배열로 반환
regex에 g 플래그가 없으면 TypeError

const order = 29432;
const a = [...order.toString().matchAll(/[3|6|9]/g)]
// ['9', index: 1, input: '29432, groups: undefined]
// ['3', index: 3, input: '29432, groups: undefined]
각 a[0].index, a[0].input 접근 가능
*/

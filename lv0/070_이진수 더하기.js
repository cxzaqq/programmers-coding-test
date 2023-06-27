//my answer
const solution = (bin1, bin2) => {
  var answer = "";
  var bin1 = bin1.split("").reverse().map(Number);
  var bin2 = bin2.split("").reverse().map(Number);
  var carry = new Array(Math.max(bin1.length, bin2.length)).fill(0);
  var aArr = [];
  console.log(carry);
  console.log(bin1, bin2);
  for (var i = 0; i < carry.length; i++) {
    var a = bin1[i] !== undefined ? bin1[i] : 0;
    var b = bin2[i] !== undefined ? bin2[i] : 0;
    var c = carry[i];

    switch (a + b + c) {
      case 0:
        aArr.push(0);
        break;
      case 1:
        aArr.push(1);
        break;
      case 2:
        carry[i + 1] = 1;
        aArr.push(0);
        break;
      case 3:
        carry[i + 1] = 1;
        aArr.push(1);
        break;
    }
  }
  answer = aArr.reverse().join("");
  return answer;
};

//most liked answer
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
/*
bin1, bin2를 각 10진수로 바꾸고 더하기
그 값을 2진수 문자열로 나타냄

parseInt(string, radix)
string을 radix진수라 생각하고 그걸 10진수로 반환

Num.toString(radix)
Num을 radix진수 문자열로 반환

각 radix는 2 ~ 36의 정수
*/

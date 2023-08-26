//my answer
const solution = (a, b) => (BigInt(a) + BigInt(b)).toString();

/*
Number.MAX_SAFE_INTEGER?
JS에서 안전한 최대 정수값.
2^53-1 = 9,007,199,254,740,991 => 16자리
문제에서 주어진 최대 길이는 100,000자리
즉 안전한 최대 정수값을 넘겼음. 이는 계산이 부정확해질 수 있음.
따라서 BigInt로 처리

String(), .toString() 차이?
String() : 어떤 형태든지 문자로 형변환
.toString() : null, undefined 형 변환 시 오류
*/

//my answer
const solution = (n, t) => n * 2 ** t;

//most liked answer
function solution(n, t) {
  return n << t;
}
/*
<< shift 연산자 
비트를 왼쪽으로 이동
1 << 1
0001 => 0010, 1 => 2
즉 2배가 됨
*/

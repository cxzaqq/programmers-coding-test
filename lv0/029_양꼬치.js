//my answer
const solution = (n, k) => {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
};

//most liked answer
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
/*
tilde(~) 연산자 - NOT 기능

*/
/*
double tilde(~~) 연산자 - Math.trunc()기능
장점 : 속도 측면에서 더 빠름
~~ > Math.trunc() > parseInt
단점 : 가독성이 좋지 않다
*/

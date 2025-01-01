//my answer
const solution = (n) => {
  const c = 185;
  let arr = [];
  for (let i = 1; i <= c; i++) {
    let a = i.toString().split("");
    if (i % 3 === 0 || a.includes("3")) {
      continue;
    }
    arr.push(i);
  }
  return arr[n - 1];
};

//most liked answer
function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num) {
    console.log(arr.length, n, num);
    if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
  }
  return arr.pop();
}
//while 문에서 변수의 변화를 감지

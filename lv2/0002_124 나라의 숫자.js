//my answer
const solution1 = (n) => {
  let answer = "";
  let t = n;
  let r;

  while (t !== 0) {
    r = t % 3;
    t = Math.floor(t / 3);

    if (r === 0) {
      answer = "4" + answer;
      t--;
    } else answer = r.toString() + answer;
  }
  return answer;
};

//toString 보다 else if가 더 빠름
const solution = (n) => {
  let answer = "";
  let t = n;
  let r;

  while (t !== 0) {
    r = t % 3;
    t = Math.floor(t / 3);

    if (r === 0) {
      answer = "4" + answer;
      t--;
    } else if (r === 1) answer = "1" + answer;
    else if (r === 2) answer = "2" + answer;
  }
  return answer;
};

//most liked answer 이게 제일 빠름
function solution(n) {
  return n === 0
    ? ""
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

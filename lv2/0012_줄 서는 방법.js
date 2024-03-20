//my answer
const solution = (n, k) => {
  let arr = [];
  for (let i = 0; i <= n; i++) arr.push(i);
  let answer = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      answer[i - 1] = arr[arr.length - 1];
      break;
    }
    let f = factorial(n - i);
    let t;
    if (k === 0) t = arr.length - 1;
    else t = Math.ceil(k / f);
    answer[i - 1] = arr[t];
    arr = arr.filter((e) => e !== arr[t]);
    k = k % f;
  }
  return answer;
};

const factorial = (n) => (n !== 1 ? n * factorial(n - 1) : 1);

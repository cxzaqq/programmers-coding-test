//my answer
const solution = (n, numlist) => {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n == 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
};

//most liked answer
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

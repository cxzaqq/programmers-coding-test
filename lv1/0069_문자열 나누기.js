//my answer
const solution = (s) => {
  let answer = 0;
  let arr1 = [];
  let arr2 = [];
  [...s].forEach((e, i) => {
    if (arr1.length === 0) arr1.push(e);
    else e === arr1[0] ? arr1.push(e) : arr2.push(e);
    if (arr1.length === arr2.length) {
      answer++;
      arr1 = [];
      arr2 = [];
    }
    if (i === s.length - 1 && arr1.length !== arr2.length) answer++;
  });
  return answer;
};

//most liked answer
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}

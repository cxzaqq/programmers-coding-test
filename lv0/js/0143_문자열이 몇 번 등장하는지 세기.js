//my answer
const solution = (myString, pat) => {
  let answer = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, pat.length + i) === pat) answer++;
  }
  return answer;
};

//most liked answer
function solution(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g");
  return myString.match(reg)?.length || 0;
}

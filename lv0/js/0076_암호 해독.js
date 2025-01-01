//my answer
const solution = (cipher, code) => {
  var answer = "";
  const cArray = cipher.split("");
  const aArray = [];
  cArray.forEach((c, i) => {
    if ((i + 1) % code === 0) aArray.push(cArray[i]);
  });
  answer = aArray.join("");
  return answer;
};

//most liked answer
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

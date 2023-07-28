//my answer
const solution = (age) => {
  return [...String(age)]
    .map((e) => {
      return String.fromCodePoint(Number(e) + 97);
    })
    .join("");
};

//most liked answer
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
//문자열 자체도 인덱스가 있어 접근 가능
//인덱스를 문자로 넣어도 가능

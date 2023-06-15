//my answer
const solution = (spell, dic) => {
  let answer = 2;
  dic = dic.filter((i) => i.length === spell.length);
  dic.forEach((word, i) => {
    dic[i] = word.split("").sort().join("");
  });
  spell = spell.sort().join("");

  dic.forEach((word) => {
    if (spell === word) {
      answer = 1;
    }
  });
  return answer;
};

//most liked answer
function solution(spell, dic) {
  return dic.some((s) => spell.sort().toString() == [...s].sort().toString())
    ? 1
    : 2;
}
/*
some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하면 true, 아니면 false 반환
원 배열을 변경하지 않음
spell = ["z", "d", "x"];
spell.sort().toString의 출력 => d, x, z
*/

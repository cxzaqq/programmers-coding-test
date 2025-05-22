//my answer
const solution = (s) =>
  s.length % 2 === 0
    ? s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);

//most liked answer
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

/*
.substr()은 바람직하지 않은 특징을 갖고 있으며 사용처가 없어질 경우
명세에서 제거될 것이라고 한다. 사용을 지양.
*/

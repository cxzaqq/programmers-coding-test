//my answer
const solution = (phone_number) =>
  [...phone_number]
    .map((v, i) => (i < phone_number.length - 4 ? "*" : v))
    .join("");

//most liked answer
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

/*
?=
전방 탐색 기호
다음에 오는 문자가 일치하는 영역에서 제외됨.
*/

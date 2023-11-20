//my answer
const solution = (s) =>
  s
    .split(" ")
    .map((v1) => {
      return [...v1]
        .map((v2, i) => {
          if (i % 2 === 0) return v2.toUpperCase();
          return v2.toLowerCase();
        })
        .join("");
    })
    .join(" ");

//most liked answer
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
/*
const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !@#$%^&*()_+=-"
a.match(/\w/g)
=> [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'
]
즉 위에서 /(\w)(\w)/g는 공백을 제외한 연속된 두 문자

만약 문자열이 홀수거나 공백이 포함되어 있다면?
const b = "a b c d efg"
b.match(/(\w)(\w)/g)
=> ['ef']
*/

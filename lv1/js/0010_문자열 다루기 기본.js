//my answer
const solution = (s) =>
  /^[0-9]+$/.test(s)
    ? s.length === 4 || s.length === 6
      ? true
      : false
    : false;

//most liked answer
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

/*
\d : [0-9]
{n} : n개
| : 조건 or 가능
*/

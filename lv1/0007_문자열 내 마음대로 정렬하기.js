//my answer
const solution = (strings, n) =>
  strings.sort((a, b) =>
    a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1
  );

//most liked answer
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

/*
"a".localeCompare("b") => -1
"b".localeCompare("a") => 1
"a".localeCompare("a") => 0
*/

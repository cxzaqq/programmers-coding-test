//my answer
const solution = (n, m, section) => {
  let answer = 0;
  let i, lastIndex;
  while (section.length !== 0) {
    answer++;
    i = 0;
    while (true) {
      if (section[i] > section[0] + m - 1 || i === section.length) {
        lastIndex = i - 1;
        break;
      } else i++;
    }
    section.splice(0, lastIndex + 1);
  }
  return answer;
};

//most liked answer
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}

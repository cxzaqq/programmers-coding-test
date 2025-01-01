//my answer
const solution = (my_string, s, e) => {
  const first = my_string.slice(0, s);
  const second = my_string.slice(s, e + 1);
  const last = my_string.slice(e + 1, my_string.length);
  const changed = [];
  for (let i = second.length - 1; i >= 0; i--) {
    changed.push(second[i]);
  }
  return [...first, ...changed, ...last].join("");
};

const solution1 = (my_string, s, e) => {
  let answer = [...my_string];
  [...my_string.slice(s, e + 1)].reverse().forEach((e, i) => {
    answer[i + s] = e;
  });
  return answer.join("");
};

//most liked answer
function solution(my_string, s, e) {
  return (
    my_string.slice(0, s) +
    my_string
      .slice(s, e + 1)
      .split("")
      .reverse()
      .join("") +
    my_string.slice(e + 1)
  );
}

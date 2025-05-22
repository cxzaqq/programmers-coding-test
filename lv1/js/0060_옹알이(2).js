//my answer
const solution = (babbling) => {
  const dupRegex = /(ayaaya|yeye|woowoo|mama)+/;
  const regex = /^(aya|ye|woo|ma)+$/;
  babbling = babbling
    .filter((v) => !dupRegex.test(v))
    .filter((v) => regex.test(v));
  return babbling.length;
};

//most liked answer
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

//my answer
const solution = (survey, choices) => {
  let answer = "";
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  survey.forEach((e, i) =>
    choices[i] > 4
      ? (obj[e.split("")[1]] += choices[i] - 4)
      : (obj[e.split("")[0]] += 4 - choices[i])
  );
  let arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i += 2) {
    arr[i][1] >= arr[i + 1][1]
      ? (answer += arr[i][0])
      : (answer += arr[i + 1][0]);
  }
  return answer;
};

//most liked answer
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

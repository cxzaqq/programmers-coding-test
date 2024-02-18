//my answer
const solution = (cards1, cards2, goal) => {
  let answer = "Yes";
  let arr1 = [];
  let arr2 = [];
  goal.forEach((_, i) => {
    if (cards1.includes(goal[i])) arr1.push(cards1.indexOf(goal[i]));
    else arr2.push(cards2.indexOf(goal[i]));
  });
  goal = [...arr1, ...arr2].join("");
  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i + 1] - arr1[i] !== 1) answer = "No";
  }
  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i + 1] - arr2[i] !== 1) answer = "No";
  }
  return answer;
};

//most liked answer
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

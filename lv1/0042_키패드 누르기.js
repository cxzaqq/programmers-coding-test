//my answer
const computeD = (rPosition, lPosition, padPosition, hand) => {
  const rD =
    Math.abs(padPosition[0] - rPosition[0]) +
    Math.abs(padPosition[1] - rPosition[1]);
  const lD =
    Math.abs(padPosition[0] - lPosition[0]) +
    Math.abs(padPosition[1] - lPosition[1]);
  if (rD === lD) return hand;
  return rD > lD ? "left" : "right";
};

const solution = (numbers, hand) => {
  let answer = "";
  let rPosition = [3, 2];
  let lPosition = [3, 0];
  let h = "";
  numbers.forEach((e) => {
    switch (e) {
      case 1:
        lPosition = [0, 0];
        answer += "L";
        break;
      case 2:
        h = computeD(rPosition, lPosition, [0, 1], hand);
        if (h === "left") {
          lPosition = [0, 1];
          answer += "L";
        } else {
          rPosition = [0, 1];
          answer += "R";
        }
        break;
      case 3:
        rPosition = [0, 2];
        answer += "R";
        break;
      case 4:
        lPosition = [1, 0];
        answer += "L";
        break;
      case 5:
        h = computeD(rPosition, lPosition, [1, 1], hand);
        if (h === "left") {
          lPosition = [1, 1];
          answer += "L";
        } else {
          rPosition = [1, 1];
          answer += "R";
        }
        break;
      case 6:
        rPosition = [1, 2];
        answer += "R";
        break;
      case 7:
        lPosition = [2, 0];
        answer += "L";
        break;
      case 8:
        h = computeD(rPosition, lPosition, [2, 1], hand);
        if (h === "left") {
          lPosition = [2, 1];
          answer += "L";
        } else {
          rPosition = [2, 1];
          answer += "R";
        }
        break;
      case 9:
        rPosition = [2, 2];
        answer += "R";
        break;
      case 0:
        h = computeD(rPosition, lPosition, [3, 1], hand);
        if (h === "left") {
          lPosition = [3, 1];
          answer += "L";
        } else {
          rPosition = [3, 1];
          answer += "R";
        }
        break;
    }
  });
  return answer;
};

//most liked answer
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers
    .map((x) => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return "L";
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return "R";
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return "L";
      }
      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}

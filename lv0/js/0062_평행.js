//my asnwer
const solution = (dots) => {
  var answer = 0;
  const inclination = [
    [
      (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]),
      (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]),
    ],
    [
      (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]),
      (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]),
    ],
    [
      (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]),
      (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]),
    ],
  ];

  for (var i = 0; i < inclination.length; i++) {
    if (inclination[i][0] === inclination[i][1]) {
      answer++;
    }
  }

  return answer > 0 ? 1 : 0;
};

//most liked answer
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

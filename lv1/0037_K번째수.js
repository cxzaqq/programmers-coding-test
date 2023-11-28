//my answer
const solution = (array, commands) => {
  let answer = [];
  commands.forEach((e) => {
    const [i, j, k] = e;
    let arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  });
  return answer;
};

//most liked answer
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

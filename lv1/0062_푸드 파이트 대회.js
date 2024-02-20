//my answer
const solution = (food) => {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] >= 2) arr.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }
  return [...arr, 0, ...arr.reverse()].join("");
};

//most liked answer
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }
  return res + "0" + [...res].reverse().join("");
}

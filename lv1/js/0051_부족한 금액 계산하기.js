//my answer
const solution = (price, money, count) => {
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost = cost + price * i;
  }
  return cost - money > 0 ? cost - money : 0;
};

//most liked answer
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

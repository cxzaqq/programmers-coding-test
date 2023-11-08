//my answer
const solution = (num_list) => {
  let oS = "";
  let eS = "";
  num_list.forEach((e) => {
    if (e % 2 === 0) eS += e.toString();
    else oS += e.toString();
  });
  return +oS + +eS;
};

//most liked answer
function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );
  return Number(odds.join("")) + Number(evens.join(""));
}

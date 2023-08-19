//my answer
const solution = (date1, date2) => {
  if (date1[0] !== date2[0]) return date1[0] < date2[0] ? 1 : 0;
  if (date1[1] !== date2[1]) return date1[1] < date2[1] ? 1 : 0;
  if (date1[2] !== date2[2]) return date1[2] < date2[2] ? 1 : 0;
  return 0;
};

//most liked answer
const solution1 = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);
/*
Date() 크기 비교 가능
*/

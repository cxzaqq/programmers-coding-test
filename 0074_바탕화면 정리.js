//my answer
const solution = (wallpaper) => {
  let left = 50;
  let right = 0;
  let top = 50;
  let bottom = 0;
  wallpaper.forEach((e, i) => {
    if (e.includes("#")) {
      if (e.indexOf("#") < left) left = e.indexOf("#");
      if (e.lastIndexOf("#") > right) right = e.lastIndexOf("#");
      if (i < top) top = i;
      if (i > bottom) bottom = i;
    }
  });
  return [top, left, bottom + 1, right + 1];
};

//most liked answer
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}

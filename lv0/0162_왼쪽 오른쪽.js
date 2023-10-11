//my answer
const solution = (str_list) => {
  let l = str_list.indexOf("l");
  let r = str_list.indexOf("r");
  if (l === -1 && r === -1) return [];
  if (l === -1 && r !== -1) return str_list.slice(r + 1, str_list.length);
  if (l !== -1 && r === -1) return str_list.slice(0, l);
  if (l > r) return str_list.slice(r + 1, str_list.length);
  if (r > l) return str_list.slice(0, l);
};

//most liked answer
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}

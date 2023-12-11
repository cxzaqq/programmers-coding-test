//my answer
const solution = (new_id) => {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  new_id = new_id.replace(/\.{2,}/g, ".");
  new_id = new_id.replace(/^\.|\.$/g, "");
  new_id = new_id.length === 0 ? "a" : new_id;
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/^\.|\.$/g, "");
  if (new_id.length <= 2) {
    const l = [...new_id][new_id.length - 1];
    while (new_id.length < 3) {
      new_id += l;
    }
  }
  return new_id;
};

//most liked answer
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
/*
string.padEnd(targetLength, padString)
현재 문자열에 padString을 targetLength까지 채운다
*/

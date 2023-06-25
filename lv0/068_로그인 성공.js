//my answer
const solution = (id_pw, db) => {
  var answer = "";
  for (var i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) {
      if (db[i][1] === id_pw[1]) {
        answer = "login";
        break;
      } else {
        answer = "wrong pw";
        break;
      }
    } else answer = "fail";
  }
  return answer;
};

//most liked answer
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
/*
const db = [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]];
const map = new Map(db);
console.log(map);
///
Map(3) {'rardss' => '123', 'yyoom' => '1234', 'meosseugi' => '1234'}
///
Map.set(key, value) => 값 삽입
Map.get(key) === value => 값 조회
Map.delete(key) => 값 삭제
Map.clear() => 전부 삭제
*/

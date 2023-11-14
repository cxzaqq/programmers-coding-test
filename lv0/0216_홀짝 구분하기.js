//my answer
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
});

//most liked answer
const readline = require("readline");
const rl1 = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const result = Number(line) % 2 ? "odd" : "even";
    console.log(line, "is", result);
  });

/*
readline 모듈 불러오기
const readline = require("redaline");

인터페이스 생성
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

입출력을 처리하는 코드 작성(문자열로 들어옴)
rl.on("line", (line) => {
	//입력받는 값을 처리하는 코드//
	rl.close(); => 입력 끝
});

rl.on("close", () => {
	//입력이 끝나고 실행할 코드//
	process.exit(); 프로세스 종료
});
*/

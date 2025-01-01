//my answer
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    input = line.split(" ");
  })
  .on("close", function () {
    console.log(input[0].repeat(input[1]));
  });

//most liked answer
const readline = require("readline");
const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});

/*
str.repeat(count);
count는 0 ~ 무한대 사이의 정수
string으로 넣어도 되긴 하는데 주의
*/

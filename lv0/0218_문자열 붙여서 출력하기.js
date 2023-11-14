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
    console.log(input.join(""));
  });

//most liked answer
const readline = require("readline");
const rl1 = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const strArr = line.split(" ");
    console.log(strArr.join(""));
  });

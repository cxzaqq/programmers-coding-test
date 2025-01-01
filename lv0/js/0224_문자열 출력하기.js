//my answer
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    input = line;
  })
  .on("close", function () {
    console.log(input);
  });

//most liked answer
const readline = require("readline");
const rl1 = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", console.log);

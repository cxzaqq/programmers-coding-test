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
    console.log(`a = ${input[0]}\nb = ${input[1]}`);
  });

//most liked answer
const readline = require("readline");
const rl1 = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const [a, b] = line.split(" ");
    console.log("a =", a);
    console.log("b =", b);
  });

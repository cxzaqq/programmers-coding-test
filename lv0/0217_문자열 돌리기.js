//my answer
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    input = [line];
  })
  .on("close", function () {
    [...input[0]].forEach((e) => {
      console.log(e);
    });
  });

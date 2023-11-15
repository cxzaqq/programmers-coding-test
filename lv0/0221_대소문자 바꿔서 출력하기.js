//my answer
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    input = [...line];
  })
  .on("close", function () {
    console.log(
      input
        .map((v) => {
          return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
        })
        .join("")
    );
  });

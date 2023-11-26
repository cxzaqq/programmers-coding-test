//my answer
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  let answer = "";
  for (let i = 0; i < n[1]; i++) {
    answer += "*".repeat(n[0]) + "\n";
  }
  console.log(answer);
});

//most liked answer
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

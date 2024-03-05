//my answer
const solution = (n) => {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n - 1];
};

//most liked answer
function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}

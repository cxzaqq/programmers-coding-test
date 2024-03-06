const solution = (n) => {
  if (n % 2) return 0;
  const mod = 1000000007;
  const dp = [0, 3, 11];
  const idx = n / 2;

  for (let i = 3; i <= idx; i++) {
    dp[i] = dp[i - 1] * 3 + 2;
    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
    }
    dp[i] %= mod;
  }

  return dp[idx];
};

//my answer
const isPrime = (n) => {
  if (n === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let t = nums[i] + nums[j] + nums[k];
        if (isPrime(t)) answer++;
      }
    }
  }
  return answer;
};

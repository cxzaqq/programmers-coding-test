//my answer
const solution = (nums) => {
  const set = new Set(nums);
  return set.size < nums.length / 2 ? set.size : nums.length / 2;
};

//most liked answer
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

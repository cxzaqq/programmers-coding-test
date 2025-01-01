//my answer
const solution = (number) => [...number].reduce((a, c) => a + +c, 0) % 9;

//most liked answer
const solution1 = (n) => BigInt(n) % 9n;

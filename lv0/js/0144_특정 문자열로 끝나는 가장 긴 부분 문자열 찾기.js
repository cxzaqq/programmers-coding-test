//my answer
const solution = (myString, pat) =>
  myString.slice(0, myString.lastIndexOf(pat) + pat.length);

//most liked answer
const solution1 = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat;

/**
 * String.substring(a, b)
 * a(포함) ~ b(미포함)
 */

function isValid(letter) {
//   let isValid = false;
  const hasBracket = /\[/;
  const hasCurly = /\{/;
  const hasEmptyParentheses = /\(\)/;
  const hasOpenParentheses = /\(([^\)]+)\s/;

  return hasBracket.test(letter) ||
  hasCurly.test(letter) ||
  hasEmptyParentheses.test(letter) ||
  hasOpenParentheses.test(letter)
    ? (isValid = false)
    : (isValid = true);
}

console.log(isValid("bici (coche) balón bici coche"));
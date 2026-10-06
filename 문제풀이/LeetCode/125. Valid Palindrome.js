/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Two Pointer
  let left = 0;
  let right = s.length - 1;

  /**
   * @param {string} ch
   * @return {boolean}
   */
  const isAlphaNumeric = (ch) => /[a-z0-9]/i.test(ch);

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;

  // 문자열 뒤집어서 해결하는 방식
  // const v = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  // const reversed = v.split('').reverse().join('');

  // return v === reversed;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

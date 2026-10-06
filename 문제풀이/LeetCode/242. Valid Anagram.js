/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * 정렬로 풀면 쉽지만, 최적화 관점에서는 Map을 이용한 풀이 권장
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const ch of t) {
    const count = map.get(ch);

    if (!count) {
      return false;
    }

    map.set(ch, count - 1);
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const key = [...str].sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return [...map.values()];
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
groupAnagrams(['']);

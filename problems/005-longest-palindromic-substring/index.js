/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string S, find the longest palindromic substring in S.
 * You may assume that the maximum length of S is 1000,
 * and there exists one unique longest palindromic substring.
 */

var longestPalindromicSubstring = module.exports = function(s) {
  if (s.length === 0) return '';
  /**
   * 将 s 字符之间插入 #
   * banana => #b#a#n#a#n#a#
   * abba => #a#b#b#a#
   * abcd => #a#b#c#d#
   * 这样处理的好处是 aba 和 abba 的两种情况可以一起处理
   */
  var insertedS = '#' + s.split('').join('#') + '#';
  var length = insertedS.length;
  var result;
  var longest = 0;
  for (var i = 1; i < length - 1; i++) {
    // count 表示以当前字符为中心的回文字符的长度
    var j = 1;
    while (i - j >= 0 && i + j <= length - 1 && insertedS[i - j] === insertedS[i + j]) {
      j++;
    }
    if (j - 1 > longest) {
      result = insertedS.substr(i - j + 1, j * 2 - 1).replace(/#/g, '');
      longest = j - 1;
    }
  }
  return result;
};

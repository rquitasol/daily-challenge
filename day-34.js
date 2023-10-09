import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Longest Substring with Non-repeating Characters
Write a function that returns the longest non-repeating substring for a string input.

Examples
longestNonrepeatingSubstring("abcabcbb") ➞ "abc"
longestNonrepeatingSubstring("aaaaaa") ➞ "a"
longestNonrepeatingSubstring("abcde") ➞ "abcde"
longestNonrepeatingSubstring("abcda") ➞ "abcd"
 */

function longestNonrepeatingSubstring(str) {
  if (!str) {
    return "";
  }

  let start = 0;
  let max_length = 0;
  let max_substring = "";
  const char_index_map = {};

  for (let end = 0; end < str.length; end++) {
    if (str[end] in char_index_map && char_index_map[str[end]] >= start) {
      start = char_index_map[str[end]] + 1;
    }

    char_index_map[str[end]] = end;
    const current_length = end - start + 1;

    if (current_length > max_length) {
      max_length = current_length;
      max_substring = str.substring(start, end + 1);
    }
  }

  return max_substring;
}

Test.assertEquals(longestNonrepeatingSubstring("abcabcbb"), "abc");
Test.assertEquals(longestNonrepeatingSubstring("aaaaaa"), "a");
Test.assertEquals(longestNonrepeatingSubstring("abcde"), "abcde");
Test.assertEquals(longestNonrepeatingSubstring("abcda"), "abcd");
Test.assertEquals(longestNonrepeatingSubstring("aaccddeeffb"), "ac");
Test.assertEquals(longestNonrepeatingSubstring("abdde"), "abd");
Test.assertEquals(longestNonrepeatingSubstring("ccdddcccc"), "cd");
Test.assertEquals(longestNonrepeatingSubstring("cdxdxccxc"), "cdx");
Test.assertEquals(longestNonrepeatingSubstring("abddefgh"), "defgh");
Test.assertEquals(longestNonrepeatingSubstring("abcdabcd"), "abcd");
Test.assertEquals(longestNonrepeatingSubstring("abddebcc"), "debc");
Test.assertEquals(longestNonrepeatingSubstring("xyxxyzyzy"), "xyz");
Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdeee"), "lmjsde");
Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfew"), "lmjsdfew");
Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfewii"), "lmjsdfewi");
Test.assertEquals(longestNonrepeatingSubstring("kjlmjjiiiidfewii"), "idfew");
Test.assertEquals(longestNonrepeatingSubstring("kjlmjjiiiidfiwii"), "kjlm");

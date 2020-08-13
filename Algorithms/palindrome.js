// "abccdba"
//    ^^

// time: O(N)
// space: O(1)

const isAlmostPalindrome = function (string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== sting[end]) {
      return (
        validSubPalindrome(string, start + 1, end) ||
        validSubPalindrome(string, start, end - 1)
      );
    }
    start++;
    end--;
  }

  return true;
};

const validSubPalindrome = function (string, start, end) {
  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

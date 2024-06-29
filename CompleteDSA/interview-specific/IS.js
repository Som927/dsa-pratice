class ISV1 {
  array_sets = {};

  string_sets = {
    // reverse a string --------------------------------- c
    1: (s = "deepak") => {
      let n = s.length;
      let i = n - 1;
      let reversedstr = "";
      while (i >= 0) {
        reversedstr += s[i];
        i--;
      }
      console.log("Reversed String: " + reversedstr);
    },
    // check if a string is a palindrome -------------- c
    2: (s = "racecar") => {
      // write your code

      let left = 0;
      let right = s.length - 1;

      while (left < right) {
        if (s[left] === s[right]) {
          left++;
          right--;
        } else {
          return console.log(false);
        }
      }
      return console.log(true);
    },
    // Find the duplicate characters in a string.------ c
    3: (s = "characters") => {
      // write your code
      let i = 0;
      const mydup = new Set();
      while (i < s.length) {
        if (mydup.has(s[i])) {
          console.log("Duplicate val at: " + i + " val : " + s[i]);
        } else {
          mydup.add(s[i]);
        }
        i++;
      }
    },
    // Find the length of the longest substring without repeating characters. ------------- c
    4: (s = "abcabcbb") => {
      let maxLength = 0;
      let left = 0;
      let right = 0;
      const uniqueChars = new Set();
      let longestSubstring = "";

      while (right < s.length) {
        if (!uniqueChars.has(s[right])) {
          uniqueChars.add(s[right]);
          if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            longestSubstring = s.substring(left, right + 1);
          }
          right++;
        } else {
          uniqueChars.delete(s[left]);
          left++;
        }
      }

      return console.log({ maxLength, longestSubstring });
    },
    // Check if two strings are anagrams of each other. --------------------- c
    5: (s1 = "listen", s2 = "silent") => {
      const nstr1 = s1.replace(/\s/g, "").trim().toLowerCase();
      const nstr2 = s2.replace(/\s/g, "").trim().toLowerCase();

      if (nstr1.length !== nstr2.length) {
        return false;
      }

      let i = 0;
      let j = 0;
      let matched = false;
      while (i < nstr1.length) {
        while (j < nstr2.length) {
          if (nstr1[i] === nstr2[j]) {
            matched = true;
          }
          j++;
        }
        if (!matched) {
          return console.log(false);
        }
        i++;
      }
      return console.log(true);
    },
    // Count the number of vowels and consonants in a string. ----------------- c
    6: (s = "characters") => {
      let nstr = s.replace(/\s/g, "").trim().toLowerCase();
      const uniqueSet = new Set();
      uniqueSet.add("a");
      uniqueSet.add("e");
      uniqueSet.add("i");
      uniqueSet.add("o");
      uniqueSet.add("u");

      for (let v of uniqueSet) {
        console.log("Vowel Set: " + v);
      }

      let i = 0;
      let countvowels = 0;
      let countconsonants = 0;
      while (i < nstr.length) {
        if (uniqueSet.has(nstr[i])) {
          countvowels += 1;
        } else {
          countconsonants += 1;
        }
        i++;
      }
      return console.log({ vowels: countvowels, consonants: countconsonants });
    },
    // Check if a string contains only digits. --------------------- c
    7: (s = "abc123") => {
      let nstr = s.replace(/\s/g, "").trim().toLowerCase();
      let aplhaarr = "0123456789".split("");
      let notalpha = true;
      let substrng = "";
      let i = 0;
      while (i < nstr.length) {
        if (!aplhaarr.includes(nstr[i])) {
          notalpha = false;
          substrng += nstr[i];
        }
        i++;
      }
      return console.log({ notalpha, substrng });
    },
    // Count the occurrences of a given character in a string. --------------- c
    8: (s = "hello world", charToCount = "l") => {
      let nstr = s.replace(/\s/g, "").trim().toLowerCase();
      charToCount = charToCount.trim().toLowerCase();
      let countocc = 0;
      let i = 0;
      while (i < nstr.length) {
        if (charToCount === nstr[i]) {
          countocc += 1;
        }
        i++;
      }
      return console.log("Occurence : " + countocc);
    },
    // Convert a given string to uppercase/lowercase. ------------------------ to do
    9: (s = "") => {
      // let newstr =
    },
    // Find the first non-repeating character in a string. ------------------- to do
    10: () => {},
    // Check if a string is a valid shuffle of two other strings. ------------ c
    11: (s1 = "abc", s2 = "def") => {
      // write your code
      let combinedstring = "";
      let ptrs1 = 0;
      let ptrs2 = 0;
      let combinedLen = 0;

      while (ptrs1 < s1.length && ptrs2 < s2.length) {
        if (ptrs1 < s1.length && ptrs2 < s2.length) {
          combinedstring += s1[ptrs1];
          combinedstring += s2[ptrs2];
          ptrs1++;
          ptrs2++;
        } else if (!ptrs1 < s1.length) {
          combinedstring += s2[ptrs2];
          ptrs2++;
        } else if (!ptrs2 < s2.length) {
          combinedstring += s1[ptrs1];
          ptrs1++;
        }
      }
      combinedLen = combinedstring.length === s1.length + s2.length;
      return console.log({ combinedstring, combinedLen });
    },
    // Remove all duplicates from a string. ---------------------------------- c
    12: (s = "characters") => {
      let nstr = s.replace(/\s/g, "").trim().toLowerCase();
      // write your code
      let duplicfree = "";
      let i = 0;

      const uniqchar = new Set();
      while (i < nstr.length) {
        uniqchar.add(nstr[i]);
        i++;
      }

      for (let char of uniqchar) {
        duplicfree += char;
      }
      return console.log("duplicate free: " + duplicfree);
    },
    // Find the longest common prefix among an array of strings. -------------- c
    13: (s = ["flower", "flow", "flight"]) => {
      if (s.length <= 1) {
        return s;
      }
      let notmatched = false;
      let prefixStr = "";
      let i = 0;
      let n = s.length;
      while (i < n) {
        for (let charIndex = 0; charIndex < s[i].length; charIndex++) {
          let char = s[i][charIndex];
          let indexChar = charIndex;
          let j = i + 1;
          while (j < n) {
            for (
              let innerCharIndex = 0;
              innerCharIndex < s[j].length;
              innerCharIndex++
            ) {
              let innChar = s[j][innerCharIndex];
              let indexinnerChar = innerCharIndex;
              if (indexChar === indexinnerChar) {
                if (char !== innChar) {
                  notmatched = true;
                  break;
                }
              }
            }
            if (notmatched) {
              break;
            } else {
              j++;
            }
          }
          if (notmatched) {
            break;
          }
          prefixStr += char;
        }
        if (notmatched) {
          break;
        }
        i++;
      }
      return console.log("Matched Prefix : " + prefixStr);
    },
    // Check if two strings are rotations of each other. ---------------------- to do
    14: () => {},
    // Implement the strStr() function to find the first occurrence of a substring. ----- to do
    15: (s = "hello", substr = "ll") => {
      if (substr.length > s.length) {
        return console.log("15: -1");
      }

      if (substr.length === 0) {
        return console.log("15: 0");
      }

      for (let i = 0; i <= s.length - substr.length; i++) {
        let j;
        for (j = 0; j < substr.length; j++) {
          if (s[i + j] !== substr[j]) {
            break;
          }
        }
        if (j === substr.length) {
          return console.log("15: " + i);
        }
      }

      return console.log("15: -1");
    },
    // Count and say problem. --------------------------- to do
    16: () => {},
    // Find the longest palindromic substring. ------------------------------- to do
    17: (s = "babad") => {
      // write your code
      if (s.length === 0) {
        return console.log("17 : -1");
      }

      // start iterating through the string
      let left = 0;
      let right = s.length;
      let longestPalindromicStr = "";
      let startIndex = 0;

      while (left < right) {
        if (s[left] === s[right]) {
          startIndex = left;
          left++;
          right--;
        } else if (startIndex === left - 1 && s[left] !== s[right]) {
          left++;
          right--;
        } else {
          left++;
          right--;
        }
      }
    },

    // Check if a string contains any permutation of another string.
    18: (smain = "", ssub = "") => {
      if (smain.length <= 0 && ssub <= 0) {
        return console.log("empty string");
      }
    },

    // Find all permutations of a given string. ---------------------------- vvip
    22: (s = "abc") => {
      const result = [];

      // Convert string to an array of characters
      const chars = s.split("");

      // Helper function to generate permutations
      function backtrack(start) {
        if (start === chars.length - 1) {
          result.push(chars.join(""));
          return;
        }
        for (let i = start; i < chars.length; i++) {
          // Swap characters
          swap(chars, start, i);
          // Recursively generate permutations for the remaining characters
          backtrack(start + 1);
          // Swap back to restore original string (backtracking)
          swap(chars, start, i);
        }
      }

      // Function to swap two characters in the array
      function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      backtrack(0);
      return console.log("22: " + result);
    },
  };

  queue_dsa = {
    // testing changes
  }
  

  algos = {
    sliding_window_technique: {
      /** Hash Table, Two Pointer and Sliding Window Technique */
      // Permutation of a string
      567: () => {},
    },
    back_tracking: {
      /** Hash table, String, Back Tracking  */
      // Letter combination of a phone number
      17: (digits = "23") => {},

      46: (s = [1, 2, 4]) => {
        let result = [];

        function bactrack(start) {
          if (start === s.length) {
            result.push([...s]);
            return;
          }

          for (let i = start; i < s.length; i++) {}
        }
      },
    },
    binary_search: {
      // Median of two sorted arrays
      4: (s1 = [1, 2], s2 = [3, 4]) => {
        if (s1.length === 0) {
          return console.log("4: " + "S1 is empty");
        } else if (s2.length === 0) {
          return console.log("4: " + "S1 is empty");
        }

        let arr = s1.concat(s2);
        arr = arr.sort((a, b) => a - b);
        let median = 0;

        console.log("Sorted Array: " + arr);
        let arrlen = arr.length;
        if (arr.length % 2 === 0) {
          let mid1 = arrlen / 2 - 1;
          let mid2 = arrlen / 2;
          median = (arr[mid1] + arr[mid2]) / 2;
          return console.log("4: " + median);
        } else {
          let mid = Math.floor(arrlen / 2);
          median = arr[mid];
          return console.log("4: " + median);
        }
      },

      // Search in Rotated Sorted Array
      33: (s = [4, 5, 6, 7, 0, 1, 2], target = 0) => {
        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
          // assuming left will be sorted
          let mid = Math.floor((left + right) / 2);

          if (s[mid] === target) {
            return console.log("33 : " + mid);
          }

          // check if the left array is normally ordered
          if (s[left] <= s[mid]) {
            if (s[left] <= target && target < s[mid]) {
              right = mid - 1;
            } else {
              left = mid + 1;
            }
          } else {
            if (s[mid] < target && target <= s[right]) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
        }
        return console.log("33: target not found.");
      },

      // Find First and Last Position of Element in Sorted Array
      34: (s = [5, 8, 7, 8, 8, 10], target = 8) => {
        let left = 0;
        let right = s.length - 1;

        let mid = Math.floor((left + right) / 2);
        let obj = {};

        while (left <= right) {
          if (s[left] < target && s[left] !== target) {
            left++;
          } else if (s[left] === target && s[right] === target) {
            if (Object.keys(obj).length > 0) {
              return console.log("34: " + JSON.stringify(obj));
            } else {
              if (!obj[left]) {
                obj[left] = left;
              }
              if (!obj[right]) {
                obj[right] = right;
              }
              return console.log("34: " + JSON.stringify(obj));
            }
          } else if (target < s[right] && s[right] !== target) {
            right--;
          } else if (s[left] === target) {
            if (!obj[left]) {
              obj[left] = left;
            }
          } else if (s[right] === target) {
            if (!obj[right]) {
              obj[right] = right;
            }
          }
        }
      },
    },
  };

  constructor() {
    /** array call */

    /** string call */
    // this.string_sets[22]();

    /** algos call */
    // this.algos.back_tracking[17]();

    /** binary search */
    this.algos.binary_search[34]();
  }

  handler = {
    dynamic_a: (s) => {
      const arr = Array.from(
        { length: s },
        () => Math.floor(Math.random() * 100) + 1
      );
      return arr;
    },

    test_func: (arr = []) => {
      return console.log(
        "Reduce Func: " + arr.reduce((acc, curr) => acc + curr, 0)
      );
    },
  };
}

const v1 = new ISV1();

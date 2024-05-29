// Assuming I will have allQuestion in redux datalayer.
// I need to filter allQuestions and currentQuestion

let allQuestion =  [
    {
      Status: true,
      Title: "Two Sum",
      Solution: "https://leetcode.com/problems/two-sum/",
      Acceptance: "50",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Add Two Numbers",
      Solution: "https://leetcode.com/problems/add-two-numbers/",
      Acceptance: "40",
      Difficulty: "Medium",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Longest Substring Without Repeating Characters",
      Solution:
        "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      Acceptance: "45",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: false,
      Title: "Median of Two Sorted Arrays",
      Solution: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      Acceptance: "35",
      Difficulty: "Hard",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Merge Intervals",
      Solution: "https://leetcode.com/problems/merge-intervals/",
      Acceptance: "55",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: false,
      Title: "Container With Most Water",
      Solution: "https://leetcode.com/problems/container-with-most-water/",
      Acceptance: "38",
      Difficulty: "Medium",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "3Sum",
      Solution: "https://leetcode.com/problems/3sum/",
      Acceptance: "42",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: false,
      Title: "Letter Combinations of a Phone Number",
      Solution:
        "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      Acceptance: "30",
      Difficulty: "Medium",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Remove Nth Node From End of List",
      Solution:
        "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      Acceptance: "48",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: true,
      Title: "Valid Parentheses",
      Solution: "https://leetcode.com/problems/valid-parentheses/",
      Acceptance: "60",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: false,
      Title: "Generate Parentheses",
      Solution: "https://leetcode.com/problems/generate-parentheses/",
      Acceptance: "25",
      Difficulty: "Medium",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Swap Nodes in Pairs",
      Solution: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      Acceptance: "50",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: true,
      Title: "Reverse Integer",
      Solution: "https://leetcode.com/problems/reverse-integer/",
      Acceptance: "35",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: false,
      Title: "Group Anagrams",
      Solution: "https://leetcode.com/problems/group-anagrams/",
      Acceptance: "40",
      Difficulty: "Medium",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Pow(x, n)",
      Solution: "https://leetcode.com/problems/powx-n/",
      Acceptance: "45",
      Difficulty: "Medium",
      Frequency: "Medium",
    },
    {
      Status: true,
      Title: "Merge Two Sorted Lists",
      Solution: "https://leetcode.com/problems/merge-two-sorted-lists/",
      Acceptance: "55",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: false,
      Title: "Subsets",
      Solution: "https://leetcode.com/problems/subsets/",
      Acceptance: "30",
      Difficulty: "Medium",
      Frequency: "Low",
    },
    {
      Status: true,
      Title: "Palindrome Number",
      Solution: "https://leetcode.com/problems/palindrome-number/",
      Acceptance: "50",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: true,
      Title: "Maximum Subarray",
      Solution: "https://leetcode.com/problems/maximum-subarray/",
      Acceptance: "47",
      Difficulty: "Easy",
      Frequency: "High",
    },
    {
      Status: false,
      Title: "Number of Islands",
      Solution: "https://leetcode.com/problems/number-of-islands/",
      Acceptance: "35",
      Difficulty: "Medium",
      Frequency: "Low",
    },
  ];

let currentQuestions = []


export const searchInputFilter = (allQuestion, input) => {
  currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    const searchTitle = question.Title.toLowerCase();
    const searchTerm = input.toLowerCase();

    return searchTitle.includes(searchTerm);
  });

  return currentQuestion;
};

// Example usage:
const input = "Sum";
searchInputFilter(input);
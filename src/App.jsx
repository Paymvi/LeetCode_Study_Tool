import React, { useState } from 'react';
import './App.css';


// import { FaClipboard } from 'react-icons/fa';  // Import the clipboard icon

const App = () => {
  
  const problemNames = [
    "Contains Duplicate", "Valid Anagram", "Two Sum", "Group Anagram", "Top K Frequent Elements", "Valid Sudoku", 
    "Product of Array Except Self", "Longest Consecutive Sequence", "Valid Palindrome", "Two Sum II Input Array is Sorted", 
    "3Sum", "Container With Most Water", "Best Time to Buy and Sell Stock", "Longest Substring Without Repeating Characters", 
    "Longest Repeating Character Replacement", "Valid Parenthesis", "Min Stack", "Daily Temperatures", "Binary Search", 
    "Find Minimum in Rotated Sorted Array", "Search in a Rotated Sorted Array", "Reverse Linked List", "Merge Two Sorted Lists", 
    "Reorder List", "Remove Nth Node From End of List", "Linked List Cycle", "LRU Cache", "Invert Binary Tree", 
    "Maximum Depth of Binary Tree", "Diameter of Binary Tree", "Balanced Binary Tree", "Same Tree", "SubTree of Another Tree", 
    "Lowest Common Ancestor of a Binary Search Tree", "Binary Tree Level Order Traversal", "Binary Tree Right Side View", 
    "Count Good Nodes in Binary Tree", "Validate Binary Search Tree", "Kth Smallest Element in a Bst", 
    "Kth Largest Element in a Stream", "Last Strong Weight", "Kth Largest Element in An Array", "Number of Islands", 
    "Max Area of Island", "Clone Graph", "Pacific Atlantic Water Flow", "Surrounded Regions", "Course Schedule", 
    "Course Schedule II"
  ];

  const problemNumbers = [
    217, 242, 1, 49, 347, 36, 238, 128, 125, 167, 15, 11, 121, 3, 424, 20, 155, 739, 704, 153, 206, 21, 143, 19, 141, 146, 
    226, 104, 543, 110, 100, 572, 235, 102, 199, 144, 129, 98, 230, 703, 396, 215, 200, 695, 133, 417, 130, 207, 210
  ];


  const additionalProblems = [
    "Add Two Numbers", "Palindrome Linked List", "Merge Intervals", "Jump Game", "Coin Change", "First Missing Positive", 
    "Word Break", "Maximal Square", "Longest Palindromic Substring", "Trapping Rain Water", "Find Peak Element", 
    "Search in Rotated Sorted Array", "Find All Anagrams in a String", "Subsets", "Combination Sum", "Permutations", 
    "Letter Combinations of a Phone Number", "Climbing Stairs", "House Robber", "Partition Equal Subset Sum", "Maximum Subarray", 
    "Word Search", "Course Schedule III", "Find the Duplicate Number", "Largest Rectangle in Histogram", 
    "Validate Stack Sequences", "Smallest Range Covering Elements from K Lists", "Longest Increasing Subsequence", "Count and Say", 
    "Nth Tribonacci Number", "Decode Ways", "Unique Paths", "Unique Paths II", "Spiral Matrix", "Spiral Matrix II", "Divide Two Integers", 
    "Ugly Number II", "Zigzag Conversion", "Palindrome Partitioning", "Best Time to Buy and Sell Stock II", "Reconstruct Itinerary", 
    "Gray Code", "Surrounded Regions", "Single Number", "Find the Celebrity", "Valid Palindrome II", "Roman to Integer", 
    "Integer to Roman"
  ];

  const additionalProblemNumbers = [
    2, 234, 56, 55, 322, 41, 139, 221, 5, 42, 162, 33, 438, 78, 39, 46, 17, 70, 198, 416, 53, 79, 630, 287, 84, 946, 632, 
    300, 6, 1137, 91, 62, 63, 54, 59, 29, 264, 6, 9, 123, 336, 23, 266, 50
  ];

  const [problem, setProblem] = useState('');

  const handleChoice = (choice) => {
    let display;
    let newProblem = false;

    switch (choice) {
      case 1:
        display = Math.floor(Math.random() * Math.min(8, problemNumbers.length));
        break;
      case 2:
        display = Math.floor(Math.random() * Math.min(4, problemNumbers.length - 8)) + 8;
        break;
      case 3:
        display = Math.floor(Math.random() * Math.min(3, problemNumbers.length - 12)) + 12;
        break;
      case 4:
        display = Math.floor(Math.random() * Math.min(3, problemNumbers.length - 15)) + 15;
        break;
      case 5:
        display = Math.floor(Math.random() * Math.min(3, problemNumbers.length - 18)) + 18;
        break;
      case 6:
        display = Math.floor(Math.random() * Math.min(6, problemNumbers.length - 21)) + 21;
        break;
      case 7:
        display = Math.floor(Math.random() * Math.min(12, problemNumbers.length - 27)) + 27;
        break;
      case 8:
        display = Math.floor(Math.random() * Math.min(3, problemNumbers.length - 39)) + 39;
        break;
      case 9:
        display = Math.floor(Math.random() * Math.min(7, problemNumbers.length - 42)) + 42;
        break;
      case 10:
        display = Math.floor(Math.random() * Math.min(49, problemNumbers.length));
        break;
      case 11:
        newProblem = true;
        display = Math.floor(Math.random() * additionalProblems.length);
        break;
      default:
        setProblem('Invalid choice!');
        return;
    }

    // Display problem name and number if not new problem
    if (!newProblem) {
      setProblem(`${display + 1} - ${problemNames[display]}`);
    } else {
      setProblem(`${display + 1} - ${additionalProblems[display]}`);
    }
  };

  // Function to handle copying text to clipboard
  const copyToClipboard = () => {
    const problemName = problem.split(" - ")[1];  // Extract only the problem name (before the " - ")
    navigator.clipboard.writeText(problemName).then(() => {
      // alert(`"${problemName}" copied to clipboard!`);
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  };


  return (
    <div className="app-container">
      <h1><strong>Random LeetCode Problem Generator</strong></h1>
      <div className="button-container">
        <button onClick={() => handleChoice(1)}>Arrays and Hashing</button>
        <button onClick={() => handleChoice(2)}>Two Pointers</button>
        <button onClick={() => handleChoice(3)}>Sliding Window</button>
        <button onClick={() => handleChoice(4)}>Stack</button>
        <button onClick={() => handleChoice(5)}>Binary Search</button>
        <button onClick={() => handleChoice(6)}>Linked List</button>
        <button onClick={() => handleChoice(7)}>Trees</button>
        <button onClick={() => handleChoice(8)}>Heap / Priority Queue</button>
        <button onClick={() => handleChoice(9)}>Graphs</button>
        <button onClick={() => handleChoice(10)}>Completely Random</button>
        <button onClick={() => handleChoice(11)}>New Problem</button>
      </div>
      {problem && (
        <div className="problem-display" onClick={copyToClipboard}>
          {problem} {/* Full problem with name and number */}
        </div>

      )}
    </div>
  );
};

export default App;

import { stage1 } from "./stage1.js";
import { stage2 } from "./stage2.js";
import { lessonBeginner } from "./lessonBeginner.js";
import { lessonFoundation } from "./lessonFoundation.js";
import { lessonProgramming } from "./lessonProgramming.js";
import { lessonComputerScience } from "./lessonComputerScience.js";
import { lessonComputerScienceExpansion } from "./lessonComputerScienceExpansion.js";
import { lessonA1 } from "./lessonA1.js";
import { lessonA2 } from "./lessonA2.js";
import { lessonA3 } from "./lessonA3.js";
import { lessonB1 } from "./lessonB1.js";
import { lessonB2 } from "./lessonB2.js";
import { lessonB3 } from "./lessonB3.js";
import { lessonB4 } from "./lessonB4.js";
import { shortcutReferenceBeginner } from "./shortcutReferenceBeginner.js";
import { conceptBeginner } from "./conceptBeginner.js";
import { conceptFoundation } from "./conceptFoundation.js";
import { conceptProgramming } from "./conceptProgramming.js";
import { conceptComputerScience } from "./conceptComputerScience.js";
import { conceptComputerScienceExpansion } from "./conceptComputerScienceExpansion.js";
import { concept1 } from "./concept1.js";
import { concept2 } from "./concept2.js";
import { concept3 } from "./concept3.js";
import { skillMatrix } from "./skillMatrix.js";
import { tools } from "./tools.js";
import { resourceLibrary } from "./resourceLibrary.js";
import { projectLadder } from "./projectLadder.js";
import { methodology } from "./methodology.js";

const baseStages = [...stage1, ...stage2];

export const stages = baseStages.map(s => {
  if (s.id === "programming") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Choosing an appropriate collection type for a problem",
        "Designing basic test cases for program behavior"
      ],
      concepts: [
        ...s.concepts,
        "Map and Set",
        "Testing and verification of program behavior"
      ],
      assessments: [
        ...s.assessments,
        "Can you choose between an Array, Object, Map, or Set for a given problem and justify the choice?",
        "Can you design normal, edge-case, and invalid-input test cases for a function from its specification?"
      ],
      resources: [
        ...s.resources,
        "MDN: Keyed collections",
        "MDN: JavaScript testing and test-your-skills resources"
      ]
    };
  }

  if (s.id === "computer-science") {
    return {
      ...s,
      skills: [
        ...s.skills,
        "Recognizing binary-tree and BST structure",
        "Traversing graphs with BFS and DFS",
        "Choosing graph representations based on density and operations",
        "Selecting an algorithmic strategy for an unfamiliar problem"
      ],
      concepts: [
        ...s.concepts,
        "Binary trees and BSTs",
        "Tree traversal: preorder, inorder, postorder",
        "Graph representation and traversal",
        "BFS and DFS",
        "Priority queues and binary heaps",
        "Algorithmic problem-solving strategies",
        "Brute force, divide-and-conquer, greedy thinking, memoization, and introductory dynamic programming"
      ],
      projects: [
        ...s.projects,
        "Implement a basic BST and compare lookup behavior with Map",
        "Build a graph and implement BFS and DFS",
        "Take one problem from brute force to an improved solution and document complexity and trade-offs"
      ],
      assessments: [
        ...s.assessments,
        "Given a tree, identify whether it satisfies the BST property and produce its inorder traversal.",
        "Given a graph, choose BFS or DFS for the task and explain the difference in traversal behavior.",
        "Given an unfamiliar problem, propose a brute-force baseline, analyze its complexity, and identify a suitable improvement strategy.",
        "Explain why a balanced BST can support approximately logarithmic search while a degenerate BST can require linear search."
      ],
      resources: [
        ...s.resources,
        "MIT 6.006: Introduction to Algorithms — Lecture Notes",
        "MIT 6.006: Introduction to Algorithms — Syllabus"
      ]
    };
  }

  return s;
});

export const lessons = [...lessonBeginner, ...lessonFoundation, ...lessonProgramming, ...lessonComputerScience, ...lessonComputerScienceExpansion, ...lessonA1, ...lessonA2, ...lessonA3];
export const lessons2 = [...lessonB1, ...lessonB2, ...lessonB3, ...lessonB4];
export const conceptCards = [...shortcutReferenceBeginner, ...conceptBeginner, ...conceptFoundation, ...conceptProgramming, ...conceptComputerScience, ...conceptComputerScienceExpansion, ...concept1, ...concept2, ...concept3];
export { skillMatrix, tools, resourceLibrary, projectLadder, methodology };
export const allLessons = [...lessons, ...lessons2];

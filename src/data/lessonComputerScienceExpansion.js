export const lessonComputerScienceExpansion = [
  {
    id: "l-binary-trees-bsts",
    stage: "computer-science",
    module: "Trees & Hierarchical Data",
    title: "Binary Trees, BSTs & Tree Traversal",
    what: "A binary tree is a hierarchical structure in which each node has at most two children. A binary search tree (BST) adds an ordering invariant that places smaller values on one side and larger values on the other.",
    why: "Stage 4 already introduces trees conceptually, but developers need to understand how tree shape and traversal affect real operations. BSTs also make the relationship between structure and Big O concrete.",
    mentalModel: "Think of a decision tree where each node splits the remaining possibilities. A BST keeps that split ordered, so a search can follow one path instead of scanning every node—provided the tree remains reasonably balanced.",
    coreConcepts: ["root, node, edge, parent, child, leaf", "subtree, depth, and height", "binary trees", "BST ordering invariant", "balanced vs degenerate trees", "preorder, inorder, and postorder traversal", "BST search and insertion", "BST deletion conceptually", "balanced BST performance"],
    example: "class Node {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// In a valid BST, values in the left subtree are smaller\n// and values in the right subtree are larger (for this policy).",
    code: "function inorder(node, result = []) {\n  if (!node) return result;\n  inorder(node.left, result);\n  result.push(node.value);\n  inorder(node.right, result);\n  return result;\n}\n\n// Inorder traversal of a valid BST produces sorted values.",
    commonMistakes: ["Assuming every tree is a binary search tree.", "Assuming every BST is balanced.", "Treating O(log n) as guaranteed without stating the tree-shape assumption.", "Confusing binary trees with sorted trees.", "Mixing up preorder, inorder, and postorder traversal."],
    practice: "Label the root, leaves, depth, height, and subtrees of several trees. Decide whether each is a valid BST and predict its preorder, inorder, and postorder traversals.",
    challenge: "Implement BST insert, search, and inorder traversal. Insert already-sorted values and compare the resulting tree with one built from a better-distributed insertion order.",
    miniProject: "Build a small contact directory using a BST keyed by name. Compare lookup behavior with a Map from Stage 3 and document the trade-off between ordering and direct lookup.",
    resources: [
      { title: "MIT 6.006 — Introduction to Algorithms lecture notes", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/", note: "Includes binary trees and AVL tree lectures." },
      { title: "MIT 6.006 — Binary Trees, Part 1", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec6/", note: "Focused lecture notes on binary-tree structure and operations." }
    ],
    mastery: ["I can identify the structural parts of a binary tree.", "I can test whether a tree satisfies the BST ordering invariant.", "I can perform preorder, inorder, and postorder traversals.", "I can explain why balanced and degenerate BSTs have different search complexity."]
  },
  {
    id: "l-graphs-bfs-dfs",
    stage: "computer-science",
    module: "Graphs & Traversal",
    title: "Graphs, BFS & DFS",
    what: "A graph models relationships between vertices connected by edges. Breadth-first search (BFS) explores level by level, while depth-first search (DFS) follows a path deeply before backtracking.",
    why: "Graphs appear in networks, routes, dependency systems, social relationships, and many other domains. BFS and DFS are foundational traversal patterns that turn a graph from a static model into something a program can explore.",
    mentalModel: "Imagine exploring a city map. BFS visits locations by distance from your starting point; DFS follows one route as far as it can before returning to try another route.",
    coreConcepts: ["vertices and edges", "directed vs undirected graphs", "weighted vs unweighted graphs", "paths, cycles, and connected components", "adjacency lists", "adjacency matrices", "visited sets", "BFS with a queue", "DFS with recursion or a stack", "unweighted shortest paths", "O(V + E) traversal with adjacency lists"],
    example: "const graph = new Map([\n  [\"A\", [\"B\", \"C\"]],\n  [\"B\", [\"D\"]],\n  [\"C\", [\"D\"]],\n  [\"D\", []]\n]);\n\n// The Map stores an adjacency list: each vertex maps to its neighbors.",
    code: "function bfs(graph, start) {\n  const queue = [start];\n  const visited = new Set([start]);\n  const order = [];\n\n  for (let i = 0; i < queue.length; i += 1) {\n    const node = queue[i];\n    order.push(node);\n\n    for (const next of graph.get(node) ?? []) {\n      if (visited.has(next)) continue;\n      visited.add(next);\n      queue.push(next);\n    }\n  }\n\n  return order;\n}",
    commonMistakes: ["Forgetting a visited set and repeatedly exploring cycles.", "Assuming DFS automatically finds a shortest path.", "Assuming BFS is always better than DFS.", "Confusing directed and undirected edges.", "Using an adjacency matrix when the graph is sparse without considering the space trade-off."],
    practice: "Convert a small relationship diagram into an adjacency list and adjacency matrix. Run BFS and DFS by hand and record the visited order.",
    challenge: "Build a friend-network explorer that finds connected components and the shortest unweighted path between two people using BFS.",
    miniProject: "Create a Route Explorer that represents locations as vertices, implements BFS and DFS, and reports the shortest unweighted route between two locations. Explain why the traversal costs O(V + E) with an adjacency list.",
    resources: [
      { title: "MIT 6.006 — Breadth-First Search", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec9/", note: "Focused lecture notes on BFS and graph exploration." },
      { title: "MIT 6.006 — Depth-First Search", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec10/", note: "Focused lecture notes on DFS and graph exploration." }
    ],
    mastery: ["I can represent a graph with an adjacency list.", "I can explain the difference between BFS and DFS.", "I can use a visited set to avoid repeated exploration.", "I can explain why BFS finds shortest paths in unweighted graphs.", "I can state the O(V + E) traversal bound for an adjacency-list graph."]
  },
  {
    id: "l-algorithmic-problem-solving",
    stage: "computer-science",
    module: "Algorithmic Problem Solving",
    title: "Algorithmic Problem-Solving Strategies",
    what: "Algorithmic problem solving is a repeatable process for turning an unfamiliar problem into a correct, analyzable solution. The goal is not to memorize algorithms, but to recognize structure and choose an appropriate strategy.",
    why: "Real problems rarely announce which algorithm to use. A disciplined workflow helps you move from a simple correct baseline to a more efficient solution while keeping assumptions, complexity, and correctness visible.",
    mentalModel: "Treat an algorithmic problem like an investigation: understand the evidence, define the input and output, build the simplest correct hypothesis, measure its cost, identify structure, improve deliberately, and verify the result.",
    coreConcepts: ["problem specification", "input/output modeling", "constraints", "brute force", "complexity analysis", "divide and conquer", "greedy thinking", "memoization", "introductory dynamic programming", "top-down vs bottom-up", "correctness verification", "time-space trade-offs"],
    example: "// Duplicate detection: start simple.\nfunction hasDuplicateSlow(values) {\n  for (let i = 0; i < values.length; i += 1) {\n    for (let j = i + 1; j < values.length; j += 1) {\n      if (values[i] === values[j]) return true;\n    }\n  }\n  return false;\n}\n\n// Then identify the repeated membership check and use a Set to reach\n// expected linear time with additional memory.",
    code: "function fibMemo(n, memo = new Map()) {\n  if (n < 2) return n;\n  if (memo.has(n)) return memo.get(n);\n\n  const value = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n  memo.set(n, value);\n  return value;\n}\n\n// Memoization avoids recomputing the same subproblems.",
    commonMistakes: ["Optimizing before establishing a correct baseline.", "Choosing a sophisticated algorithm simply because it sounds advanced.", "Assuming a greedy choice is globally optimal without justification.", "Applying dynamic programming without identifying overlapping subproblems or useful state.", "Ignoring input constraints when choosing an approach.", "Comparing algorithms without stating their assumptions.", "Skipping correctness checks after an optimization."],
    practice: "For an unfamiliar problem, write the input, output, constraints, brute-force approach, expected complexity, repeated work, possible strategy, and verification plan before writing optimized code.",
    challenge: "Take one problem from brute force to an improved solution. Record the original complexity, the structural observation that enabled the improvement, the new complexity, and the time-space trade-off.",
    miniProject: "Build an Algorithm Strategy Lab containing three small problems: one suited to divide and conquer, one where a greedy strategy is plausible and must be justified, and one with overlapping subproblems where memoization or introductory dynamic programming helps. Document why each strategy fits.",
    resources: [
      { title: "MIT 6.006 — Syllabus", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/", note: "Course description covering data structures, algorithmic paradigms, modeling, and performance analysis." },
      { title: "MIT 6.006 — Lecture Notes", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/", note: "Full sequence of introductory algorithms and data-structure lectures." }
    ],
    mastery: ["I can turn an unfamiliar problem into explicit inputs, outputs, and constraints.", "I can produce a simple correct baseline before optimizing.", "I can recognize when divide and conquer, greedy thinking, or memoization may fit.", "I can compare solutions using complexity and explicit trade-offs.", "I can verify an optimized solution instead of assuming it is correct."]
  }
];

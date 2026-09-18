export const conceptComputerScienceExpansion = [
  {
    id: "concept-binary-trees-bsts",
    stage: "computer-science",
    module: "Trees & Hierarchical Data",
    title: "Binary Trees & BSTs",
    what: "A binary tree gives each node at most two children; a binary search tree adds an ordering invariant that makes directional search possible.",
    why: "Tree shape directly affects performance. A balanced BST can provide logarithmic-height operations, while a degenerate tree can behave like a linked list.",
    keyPoints: ["Trees model hierarchy through parent-child relationships.", "A binary tree is not automatically sorted.", "A BST maintains an ordering invariant between each node and its subtrees.", "Inorder traversal of a valid BST yields values in sorted order.", "Balanced shape is what supports approximately logarithmic height; an arbitrary BST can degrade to linear height.", "AVL trees are introduced here only as an example of why balancing exists, not as an implementation requirement."],
    resource: { title: "MIT 6.006 — Binary Trees lecture notes", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/" }
  },
  {
    id: "concept-graph-representation-traversal",
    stage: "computer-science",
    module: "Graphs & Traversal",
    title: "Graph Representation & Traversal",
    what: "Graphs represent relationships between vertices, and their representation determines the memory and access trade-offs available to algorithms.",
    why: "BFS and DFS are foundational graph traversals. Learning the representation and the visited-state model prevents common errors with cycles and repeated work.",
    keyPoints: ["Graphs may be directed or undirected and weighted or unweighted.", "Adjacency lists are usually space-efficient for sparse graphs.", "Adjacency matrices make direct edge lookup simple but use O(V²) space.", "BFS uses a queue and explores outward by levels.", "DFS uses recursion or an explicit stack and explores deeply before backtracking.", "A visited set prevents repeated exploration and infinite cycling.", "With adjacency lists, BFS and DFS run in O(V + E).", "BFS gives shortest-path distances in unweighted graphs when started from the source."],
    resource: { title: "MIT 6.006 — BFS and DFS lecture notes", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/" }
  },
  {
    id: "concept-heaps-priority-queues",
    stage: "computer-science",
    module: "Priority Queues",
    title: "Heaps & Priority Queues",
    what: "A priority queue exposes operations for retrieving the highest- or lowest-priority item, while a binary heap is a common data structure used to implement it efficiently.",
    why: "Heaps connect directly to scheduling and prioritization problems. They also reinforce the broader Stage 4 lesson that data structure shape determines operation cost.",
    keyPoints: ["A min-heap keeps the minimum at the root; a max-heap keeps the maximum at the root.", "The heap property is different from the total ordering property of a BST.", "A binary heap is commonly represented compactly in an array.", "Typical binary-heap operations are peek O(1), insert O(log n), and extract-min/max O(log n).", "Building a heap from an existing array can be done in O(n).", "Priority queues are useful for task scheduling and other 'next most important item' workflows."],
    resource: { title: "MIT 6.006 — Binary Heaps lecture notes", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/mit6_006s20_lec8/" }
  }
];

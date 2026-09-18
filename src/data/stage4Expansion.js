import { stage1 } from "./stage1.js";
import { lessonB3 } from "./lessonB3.js";
import { concept2 } from "./concept2.js";

// Stage 4 closes the data-structure gap between trees/graphs and later
// algorithmic applications by giving heaps and priority queues a full lesson.
lessonB3.push({
  id: "l-heaps-priority-queues",
  stage: "computer-science",
  module: "Data Structures",
  title: "Heaps & Priority Queues",
  what: "A binary heap is a complete binary tree stored efficiently in an array with a heap invariant: a min-heap keeps each parent less than or equal to its children, while a max-heap keeps each parent greater than or equal to its children. A priority queue uses this structure to repeatedly access the highest- or lowest-priority item without maintaining a fully sorted collection.",
  why: "Priority queues appear in scheduling, event simulation, graph algorithms, job processing, and resource management. The heap gives you predictable O(log n) insertion and removal while keeping the next priority item available at the root.",
  mentalModel: "Think of an airport boarding priority list. You do not need everyone completely sorted at every moment; you mainly need the next passenger with the highest priority. A heap keeps the most important item at the top while allowing the rest of the structure to remain only partially ordered.",
  coreConcepts: [
    "Complete binary tree: every level is full except possibly the last, which is filled from left to right. This shape lets a heap fit naturally in an array.",
    "Min-heap invariant: every parent is less than or equal to its children, so the minimum is at the root. Max-heaps use the reverse invariant and expose the maximum at the root.",
    "Zero-based array representation: parent(i) = Math.floor((i - 1) / 2), left(i) = 2 * i + 1, right(i) = 2 * i + 2.",
    "Sift up / bubble up: after insertion, repeatedly compare an item with its parent and swap while the heap invariant is violated.",
    "Sift down / heapify: after removing the root, move the last item to the root and repeatedly swap it with the better-priority child until the invariant is restored.",
    "Priority queue operations: peek returns the root without removing it; insert adds an item; extract removes the root; build-heap transforms an unordered array into a heap.",
    "Complexity: peek is O(1), insert and extract are O(log n), and building a heap from an unordered array is O(n). Heap sort runs in O(n log n).",
    "A heap is not a binary search tree: only the parent-child priority relationship is guaranteed; siblings and distant nodes are not globally sorted.",
    "Priority queues can store records rather than bare numbers by comparing a chosen priority field; equal priorities need an explicit tie-breaking policy when stable ordering matters."
  ],
  example: "// Min-heap array: the smallest value is always at index 0.\n// [2, 5, 3, 9, 7, 8]\n//        2\n//      /   \\\n//     5     3\n//    / \\   / \\\n//   9   7  8\n// The tree is NOT fully sorted. The only required relationship is parent <= child.",
  code: "class MinHeap {\n  constructor() { this.items = []; }\n\n  peek() {\n    return this.items[0] ?? null;\n  }\n\n  insert(value) {\n    this.items.push(value);\n    this.#siftUp(this.items.length - 1);\n  }\n\n  extractMin() {\n    if (this.items.length === 0) return null;\n    if (this.items.length === 1) return this.items.pop();\n\n    const min = this.items[0];\n    this.items[0] = this.items.pop();\n    this.#siftDown(0);\n    return min;\n  }\n\n  #siftUp(index) {\n    while (index > 0) {\n      const parent = Math.floor((index - 1) / 2);\n      if (this.items[parent] <= this.items[index]) break;\n      [this.items[parent], this.items[index]] = [this.items[index], this.items[parent]];\n      index = parent;\n    }\n  }\n\n  #siftDown(index) {\n    while (true) {\n      const left = index * 2 + 1;\n      const right = index * 2 + 2;\n      let smallest = index;\n\n      if (left < this.items.length && this.items[left] < this.items[smallest]) smallest = left;\n      if (right < this.items.length && this.items[right] < this.items[smallest]) smallest = right;\n      if (smallest === index) break;\n\n      [this.items[index], this.items[smallest]] = [this.items[smallest], this.items[index]];\n      index = smallest;\n    }\n  }\n}\n\nconst queue = new MinHeap();\nqueue.insert(5);\nqueue.insert(2);\nqueue.insert(8);\nqueue.insert(1);\nconsole.log(queue.peek());       // 1\nconsole.log(queue.extractMin()); // 1\nconsole.log(queue.extractMin()); // 2",
  commonMistakes: [
    "Assuming a heap is fully sorted. A heap only guarantees the parent-child invariant.",
    "Using the wrong child indexes in a zero-based array. Remember left = 2i + 1 and right = 2i + 2.",
    "Restoring a heap after extraction by only checking one child. Compare both children and choose the better-priority one.",
    "Forgetting to restore the invariant after insertion or extraction, leaving a structure that looks like a heap but is no longer valid.",
    "Claiming build-heap is O(n log n) simply because it performs heapify operations. Bottom-up heap construction is O(n).",
    "Assuming equal-priority items are automatically stable. If insertion order matters, store an explicit sequence number as a tie-breaker."
  ],
  practice: "Implement the MinHeap class above from scratch without copying the private methods. Insert [7, 2, 9, 1, 5, 3], draw the heap after each insertion, then extract every value and verify that the output is sorted.",
  challenge: "Change the implementation into a reusable PriorityQueue class that stores objects such as { task, priority }. Make lower numbers mean higher priority, add a sequence number for deterministic tie-breaking, and explain why the queue does not need to keep all tasks sorted.",
  miniProject: "Build a small task scheduler using your priority queue. Each task has a name, priority, and estimated duration. Support add, peek-next, run-next, and list-pending operations. Add tests for duplicates, equal priorities, an empty queue, and at least 1000 generated tasks; record the operation complexity in the README.",
  resources: [
    { title: "MIT OpenCourseWare — Heaps and Heap Sort", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/", note: "Undergraduate algorithms lecture covering priority queues, heap operations, and heapsort." },
    { title: "MIT OpenCourseWare — Binary Heaps", url: "https://live.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-8-binary-heaps/", note: "Lecture focused on binary heaps and priority-queue interfaces." },
    { title: "Python documentation — heapq", url: "https://docs.python.org/3/library/heapq.html", note: "A practical reference for heap invariants, heapify, push/pop, and priority-queue patterns." }
  ],
  mastery: [
    "I can explain the difference between a heap and a binary search tree.",
    "I can derive the parent and child indexes for a zero-based array heap.",
    "I can implement sift-up and sift-down without relying on a library implementation.",
    "I can state and justify the complexity of peek, insert, extract, build-heap, and heapsort.",
    "I can choose a heap-backed priority queue when I need repeated access to the next highest- or lowest-priority item.",
    "I can design a deterministic tie-breaking strategy for equal-priority records."
  ]
});

const heapsConcept = {
  id: "c-heaps-priority-queues",
  stage: "computer-science",
  module: "Data Structures",
  title: "Heaps & Priority Queues",
  what: "A heap is a complete binary tree with a local ordering invariant, usually represented compactly in an array. A priority queue is an abstract data type that supports inserting items and efficiently retrieving/removing the item with the highest or lowest priority.",
  why: "Heaps provide a useful middle ground between an unsorted collection and a fully sorted structure: the next priority item is immediately available, while updates cost only logarithmic time in the common binary-heap implementation.",
  keyPoints: [
    "Min-heaps expose the minimum at the root; max-heaps expose the maximum.",
    "The heap property is local to parent-child relationships; the structure is not globally sorted.",
    "Array indexes encode the tree shape without explicit node objects.",
    "Sift-up repairs insertion; sift-down repairs extraction or heapify.",
    "Binary heap priority queues support O(1) peek and O(log n) insert/extract; bottom-up build-heap is O(n).",
    "Common applications include scheduling, event simulation, graph algorithms, top-k problems, and job processing."
  ],
  resource: { title: "MIT OpenCourseWare — Heaps and Heap Sort", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/" }
};

if (!concept2.some((concept) => concept.id === heapsConcept.id)) {
  concept2.push(heapsConcept);
}

const computerScienceStage = stage1.find((stage) => stage.id === "computer-science");
if (computerScienceStage) {
  computerScienceStage.skills = Array.from(new Set([
    ...(computerScienceStage.skills || []),
    "Implement and analyze binary heaps and priority queues",
    "Choose appropriate data structures for priority-driven workloads"
  ]));
  computerScienceStage.concepts = Array.from(new Set([
    ...(computerScienceStage.concepts || []),
    "Binary trees and BSTs",
    "Graphs, BFS, and DFS",
    "Heaps and priority queues"
  ]));
  computerScienceStage.projects = Array.from(new Set([
    ...(computerScienceStage.projects || []),
    "Build a heap-backed priority queue and use it in a task scheduler"
  ]));
  computerScienceStage.assessments = Array.from(new Set([
    ...(computerScienceStage.assessments || []),
    "Can you implement a binary heap, explain its invariant, and justify the complexity of its core operations?"
  ]));
  computerScienceStage.exitCriteria = `${computerScienceStage.exitCriteria || ""} You can select, implement, and analyze trees, graphs, and heap-backed priority queues for appropriate problems, and explain the time/space trade-offs of your choice.`.trim();

  // Canonicalize repeated Stage 4 metadata from earlier expansions.
  computerScienceStage.concepts = Array.from(new Set(computerScienceStage.concepts))
    .filter((concept) => concept !== "Heaps and priority queues")
    .filter((concept) => concept !== "Priority queues and binary heaps");
  if (!computerScienceStage.concepts.includes("Heaps & Priority Queues")) {
    computerScienceStage.concepts.push("Heaps & Priority Queues");
  }
}

// Canonicalize concept-note duplicates introduced by earlier Stage 4 additions.
const heapTitles = new Set(["Heaps & Priority Queues", "Heaps and Priority Queues"]);
let keptHeapConcept = false;
for (let i = concept2.length - 1; i >= 0; i -= 1) {
  const concept = concept2[i];
  if (!concept || concept.stage !== "computer-science" || !heapTitles.has(concept.title)) continue;
  if (!keptHeapConcept) {
    keptHeapConcept = true;
    continue;
  }
  concept2.splice(i, 1);
}

// Keep the existing broader "Stack, Heap & References" concept; it is a
// memory-model topic and is intentionally distinct from the heap data structure.

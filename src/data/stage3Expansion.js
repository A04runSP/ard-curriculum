import { lessonB1 } from "./lessonB1.js";
import { concept1 } from "./concept1.js";

const stage3ObjectModelLesson = {
  id: "l-js-object-model",
  stage: "programming",
  module: "JavaScript Object Model",
  title: "JavaScript Objects, Prototypes, `this` & Classes",
  what: "JavaScript objects use a prototype-based object model. Property lookup can follow a prototype chain, functions can be used as constructors, `this` is determined by how a function is called, and class syntax provides a clearer abstraction over prototype-based behavior.",
  why: "You can write basic JavaScript without understanding the object model, but unfamiliarity with prototypes and `this` causes difficult bugs in real code, especially when working with classes, callbacks, methods, inheritance, libraries, or older JavaScript codebases.",
  mentalModel: "Separate four ideas: an object is a collection of properties; `[[Prototype]]` is the object's delegation link; a function's `prototype` property is used when that function creates instances with `new`; and `this` is a call-site binding, not a pointer to the function itself. Class syntax sits on top of this prototype mechanism.",
  coreConcepts: [
    "Own properties vs inherited properties: JavaScript first checks an object itself, then follows its prototype chain until it finds the property or reaches null.",
    "`Object.getPrototypeOf()` reveals an object's prototype. Avoid relying on the deprecated `__proto__` accessor in application code.",
    "Constructor functions and `new`: a new instance is linked to the constructor's `prototype`, then the constructor runs with `this` referring to the new instance.",
    "`this` depends on the call form: `obj.method()` binds `this` to obj; a detached function can lose that receiver; arrow functions capture lexical `this` instead of creating their own.",
    "Classes are primarily syntax and semantics layered over prototypes. Instance methods are placed on the class prototype, while `extends` creates a prototype relationship between derived and base classes.",
    "Inheritance vs composition: inheritance creates a coupling relationship; composition combines smaller behaviors/objects and is often easier to change.",
    "Property shadowing: an own property can hide an inherited property with the same name.",
    "Do not modify built-in prototypes in ordinary application code; prefer explicit composition, utility functions, or well-defined classes."
  ],
  example: "const parent = {\n  role: \"base\",\n  describe() {\n    return `${this.name}: ${this.role}`;\n  }\n};\n\nconst child = Object.create(parent);\nchild.name = \"Arun\";\nconsole.log(child.describe()); // Arun: base\n\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hello, ${this.name}`;\n  }\n}\n\nconst user = new User(\"Arun\");\nconsole.log(Object.getPrototypeOf(user) === User.prototype); // true",
  code: "class Counter {\n  constructor(start = 0) {\n    this.value = start;\n  }\n\n  increment() {\n    this.value += 1;\n    return this.value;\n  }\n}\n\nconst counter = new Counter(3);\nconsole.log(counter.increment()); // 4\n\nconst increment = counter.increment;\n// increment(); // `this` is not the counter when called detached\n\nconst boundIncrement = counter.increment.bind(counter);\nconsole.log(boundIncrement()); // 5\n\nconsole.log(Object.getPrototypeOf(counter) === Counter.prototype); // true",
  commonMistakes: [
    "Treating `prototype` and `[[Prototype]]` as the same thing. A constructor function has a `prototype` property; each object has its own internal `[[Prototype]]` link.",
    "Assuming `this` always means the object where a function was originally declared. For ordinary functions, the call site determines the receiver in common call forms.",
    "Detaching a method and then expecting it to retain its original receiver; use a wrapper, `bind`, or an arrow function where appropriate.",
    "Using `__proto__` as the normal API for prototype manipulation. Prefer `Object.getPrototypeOf`, `Object.setPrototypeOf`, or `Object.create` when prototype operations are actually required.",
    "Using inheritance automatically when composition would produce a simpler dependency relationship.",
    "Assuming class syntax means JavaScript has abandoned prototypes. Classes still use the prototype mechanism underneath."
  ],
  practice: "Create a `Person` constructor function with a `greet` method on `Person.prototype`. Create two people, verify that they share the same method reference, and inspect their prototype with `Object.getPrototypeOf`.",
  challenge: "Build a small notification model with a base class and one derived class, then refactor the same behavior into composition. Explain which dependencies become easier or harder to change in each design.",
  miniProject: "Create a JavaScript object-model lab that demonstrates: own vs inherited properties, prototype lookup and shadowing, constructor functions with `new`, class methods, `extends`/`super`, detached-method `this`, `bind`, and a composition alternative. Add assertions that verify the important behaviors rather than relying only on console output.",
  resources: [
    { title: "MDN — Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain", note: "Authoritative explanation of prototype chains, constructors, classes, and property lookup." },
    { title: "MDN — Working with objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects", note: "Practical reference for JavaScript objects, methods, and inheritance." },
    { title: "MDN — Using classes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes", note: "Current guide to constructors, methods, private fields, and inheritance." }
  ],
  mastery: [
    "I can explain the difference between an object's `[[Prototype]]` and a constructor function's `prototype` property.",
    "I can predict a property lookup through a prototype chain and identify shadowing.",
    "I can explain what `this` refers to for the common JavaScript call forms and fix a detached-method bug.",
    "I can explain how class syntax relates to prototypes rather than treating classes as a separate runtime inheritance model.",
    "I can choose composition or inheritance deliberately and explain the trade-off."
  ]
};

lessonB1.push(stage3ObjectModelLesson);

concept1.push({
  id: "c-js-object-model",
  stage: "programming",
  module: "JavaScript Object Model",
  title: "JavaScript Prototypes, `this` & Classes",
  what: "JavaScript has a prototype-based object model: objects can delegate property lookup through a prototype chain, while class syntax provides a structured way to create and connect objects using that same mechanism.",
  why: "Understanding the object model explains behavior that otherwise looks like JavaScript magic: inherited methods, `new`, `this`, `extends`, method binding, and why a detached method can behave differently from a method call.",
  keyPoints: [
    "Own properties are stored on the object itself; inherited properties are found by walking its prototype chain.",
    "`Object.getPrototypeOf(obj)` exposes the object's prototype; `Object.create(proto)` can create an object with a chosen prototype.",
    "A constructor function's `prototype` becomes the prototype of instances created with `new`.",
    "For ordinary function calls, `this` is primarily determined by how the function is invoked; arrow functions use lexical `this`.",
    "Classes are built on the prototype mechanism and make common object-oriented patterns easier to express.",
    "Composition can avoid some of the coupling introduced by inheritance."
  ],
  resource: { title: "MDN — Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain" }
});

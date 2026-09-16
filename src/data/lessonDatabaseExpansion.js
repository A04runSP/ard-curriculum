export const lessonDatabaseExpansion = [
  {
    id: "l-db-relational-modeling-normalization",
    stage: "databases",
    module: "Relational Modeling",
    title: "Relational Modeling & Normalization",
    what: "Relational modeling turns a real-world domain into tables, keys, relationships, constraints, and rules that preserve data meaning.",
    why: "A schema that mirrors a messy spreadsheet tends to duplicate facts, create update anomalies, and make correctness harder to enforce.",
    mentalModel: "Start with entities and relationships, identify stable facts and their dependencies, then choose keys and constraints before writing application code.",
    coreConcepts: ["Entities and attributes", "Candidate and primary keys", "Foreign keys", "One-to-one, one-to-many, and many-to-many relationships", "Junction tables", "Functional dependencies", "First, second, and third normal forms", "Insert, update, and delete anomalies", "Denormalization trade-offs"],
    example: "A many-to-many relationship between books and authors becomes book, author, and book_author tables rather than repeated author columns.",
    code: "CREATE TABLE book_author (\n  book_id bigint REFERENCES book(id),\n  author_id bigint REFERENCES author(id),\n  PRIMARY KEY (book_id, author_id)\n);",
    commonMistakes: ["Putting repeated values into comma-separated columns", "Using a descriptive field as a primary key when it is not stable", "Confusing a foreign key with a unique key", "Normalizing mechanically without understanding the business facts"],
    practice: "Take a messy bookstore spreadsheet and identify entities, keys, dependencies, and relationships before designing tables.",
    challenge: "Normalize a deliberately duplicated customer-order dataset to 3NF and explain which anomaly each change prevents.",
    miniProject: "Design and normalize a PostgreSQL schema for a bookstore or gym from a messy spreadsheet, including PK, FK, UNIQUE, NOT NULL, and CHECK constraints.",
    resources: [
      { title: "PostgreSQL 18 Tutorial", url: "https://www.postgresql.org/docs/18/tutorial.html", note: "Official PostgreSQL introduction to relational concepts and SQL." },
      { title: "PostgreSQL Constraints", url: "https://www.postgresql.org/docs/18/ddl-constraints.html", note: "Official reference for primary keys, foreign keys, unique, check, and not-null constraints." }
    ],
    mastery: ["I can identify entities and relationships from a domain description.", "I can explain 1NF, 2NF, and 3NF in practical terms.", "I can choose primary and foreign keys deliberately.", "I can explain when denormalization is a trade-off rather than a shortcut."]
  },
  {
    id: "l-db-joins-aggregation-subqueries",
    stage: "databases",
    module: "SQL Querying",
    title: "SQL Querying: Joins, Aggregation & Subqueries",
    what: "Advanced everyday SQL combines multiple relations, groups rows, calculates aggregates, and uses subqueries to express conditions and intermediate results.",
    why: "Real applications rarely query one table at a time. Confident relational querying is the difference between retrieving data and reasoning about it.",
    mentalModel: "Build a query from the row source outward: FROM/JOIN establishes the working set, WHERE filters rows, GROUP BY forms groups, HAVING filters groups, and SELECT shapes the result.",
    coreConcepts: ["INNER JOIN", "LEFT JOIN", "Multi-table joins", "GROUP BY and HAVING", "COUNT, SUM, AVG, MIN, MAX", "Scalar and correlated subqueries", "EXISTS and NOT EXISTS", "UNION, INTERSECT, EXCEPT", "NULL behavior"],
    example: "SELECT customer_id, COUNT(*) AS orders FROM orders GROUP BY customer_id HAVING COUNT(*) >= 3;",
    code: "SELECT c.id, c.name, COUNT(o.id) AS order_count\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nGROUP BY c.id, c.name\nORDER BY order_count DESC;",
    commonMistakes: ["Turning a LEFT JOIN into an accidental INNER JOIN with a WHERE condition", "Grouping by too little or too much", "Using COUNT(*) when COUNT(column) is required", "Ignoring NULL semantics", "Using a correlated subquery when a join or aggregation is clearer"],
    practice: "Write a set of queries over customers, orders, and products that includes joins, grouping, HAVING, EXISTS, and a subquery.",
    challenge: "Given a reporting requirement, produce the query in two ways and explain the readability and performance trade-offs.",
    miniProject: "Write 10 progressively harder SQL queries against a sample relational dataset, including multi-table joins, aggregation, subqueries, and set operations.",
    resources: [
      { title: "PostgreSQL 18 SQL Tutorial", url: "https://www.postgresql.org/docs/18/tutorial-sql.html", note: "Official querying, joins, aggregates, updates, and deletes tutorial." },
      { title: "PostgreSQL SELECT", url: "https://www.postgresql.org/docs/18/sql-select.html", note: "Official SELECT syntax and query processing reference." }
    ],
    mastery: ["I can choose INNER versus OUTER joins deliberately.", "I can write grouped reports with HAVING.", "I can use EXISTS and subqueries when they express the requirement clearly.", "I can explain how NULL affects a query result."]
  },
  {
    id: "l-db-ctes-query-composition",
    stage: "databases",
    module: "Advanced SQL",
    title: "CTEs & Advanced Query Composition",
    what: "Common Table Expressions let you name intermediate query results so complex SQL can be decomposed into understandable stages.",
    why: "Large analytical and reporting queries become difficult to reason about when every transformation is nested inside one SELECT expression.",
    mentalModel: "Treat a CTE as a named relational step: define a result, inspect what it means, then feed it into the next step.",
    coreConcepts: ["WITH clauses", "Chaining CTEs", "CTEs versus subqueries", "Readable query composition", "Recursive CTE concept", "Data-modifying CTE concept", "Materialization considerations"],
    example: "WITH customer_totals AS (SELECT customer_id, SUM(total) AS spend FROM orders GROUP BY customer_id) SELECT * FROM customer_totals WHERE spend > 1000;",
    code: "WITH monthly AS (\n  SELECT date_trunc('month', created_at) AS month, SUM(total) AS revenue\n  FROM orders\n  GROUP BY 1\n), ranked AS (\n  SELECT month, revenue, RANK() OVER (ORDER BY revenue DESC) AS position\n  FROM monthly\n)\nSELECT * FROM ranked ORDER BY month;",
    commonMistakes: ["Using CTEs without naming intermediate results clearly", "Assuming every CTE is automatically materialized", "Using recursive SQL without a clear termination condition", "Hiding a simple query behind unnecessary layers"],
    practice: "Refactor a deeply nested reporting query into two or three named CTEs.",
    challenge: "Build a recursive CTE for a simple hierarchy and explain the anchor and recursive terms without relying on an ORM.",
    miniProject: "Build an analytics query using multiple CTEs that transforms raw order data into a monthly business report.",
    resources: [
      { title: "PostgreSQL — WITH Queries", url: "https://www.postgresql.org/docs/18/queries-with.html", note: "Official CTE and recursive-query documentation." }
    ],
    mastery: ["I can decide when a CTE improves query structure.", "I can chain CTEs without losing track of row meaning.", "I understand the basic shape of a recursive CTE.", "I can distinguish readability concerns from execution-plan concerns."]
  },
  {
    id: "l-db-window-functions",
    stage: "databases",
    module: "Analytical SQL",
    title: "Window Functions & Analytical SQL",
    what: "Window functions calculate across related rows while retaining one output row per input row, making them ideal for rankings, running totals, comparisons, and time-series analysis.",
    why: "Many analytics tasks cannot be expressed cleanly with GROUP BY alone because you need both the individual row and a calculation over its surrounding rows.",
    mentalModel: "GROUP BY collapses rows into groups; a window function keeps the rows and adds context calculated over a defined window.",
    coreConcepts: ["OVER", "PARTITION BY", "Window ORDER BY", "Window frames", "ROW_NUMBER", "RANK and DENSE_RANK", "LAG and LEAD", "Running totals", "Filtering window results with a subquery or CTE"],
    example: "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)",
    code: "SELECT customer_id, created_at, total,\n       SUM(total) OVER (PARTITION BY customer_id ORDER BY created_at) AS running_spend,\n       LAG(total) OVER (PARTITION BY customer_id ORDER BY created_at) AS previous_order\nFROM orders;",
    commonMistakes: ["Confusing PARTITION BY with GROUP BY", "Forgetting ORDER BY when order matters", "Filtering on a window alias in WHERE in the same query level", "Ignoring ties when choosing RANK versus ROW_NUMBER"],
    practice: "Write ranking, top-per-group, running-total, and previous-row queries against an order dataset.",
    challenge: "Return the top three products per category while keeping product-level rows and explain why GROUP BY alone is insufficient.",
    miniProject: "Build an analytics report using CTEs and window functions for rankings, running totals, and period-over-period comparisons.",
    resources: [
      { title: "PostgreSQL 18 — Window Functions Tutorial", url: "https://www.postgresql.org/docs/18/tutorial-window.html", note: "Official guide to OVER, partitions, ordering, frames, and ranking." }
    ],
    mastery: ["I can explain GROUP BY versus a window function.", "I can use PARTITION BY and ORDER BY deliberately.", "I can choose between ROW_NUMBER, RANK, and DENSE_RANK.", "I can build a running total or previous-row comparison."]
  },
  {
    id: "l-db-indexes-selectivity",
    stage: "databases",
    module: "Indexing",
    title: "Indexes, Selectivity & Query Performance",
    what: "Indexes are additional data structures that can help PostgreSQL find rows without scanning every table row, at the cost of storage and write maintenance.",
    why: "Indexes can dramatically improve selective reads, but unnecessary or poorly chosen indexes increase write cost and do not guarantee a faster query.",
    mentalModel: "An index is a shortcut, not a magic switch. Ask what predicate or ordering needs acceleration, how selective it is, and what the write/storage trade-off will be.",
    coreConcepts: ["B-tree fundamentals", "Index scan versus sequential scan", "Selectivity", "Single-column indexes", "Composite indexes", "Unique indexes", "Partial indexes", "Expression indexes", "Index storage and write overhead"],
    example: "CREATE INDEX idx_orders_customer_created ON orders(customer_id, created_at DESC);",
    code: "CREATE INDEX idx_active_users_email ON users(email) WHERE deleted_at IS NULL;",
    commonMistakes: ["Indexing every column", "Ignoring composite-index column order", "Creating an index before measuring the query", "Assuming an index must be used because it exists", "Forgetting that writes must maintain indexes"],
    practice: "For several query predicates, choose an index or explain why a sequential scan may be appropriate.",
    challenge: "Design a composite index for a common customer order-history query and explain why the column order matches the access pattern.",
    miniProject: "Take a slow query, add one carefully justified index, compare plans and measured execution before and after, and document the trade-off.",
    resources: [
      { title: "PostgreSQL 18 — Indexes", url: "https://www.postgresql.org/docs/18/indexes.html", note: "Official index concepts and index types." },
      { title: "Use The Index, Luke!", url: "https://use-the-index-luke.com/", note: "Practical SQL indexing and query-performance education." }
    ],
    mastery: ["I can explain what an index accelerates and what it costs.", "I can reason about selectivity.", "I can choose a composite-index order for a query pattern.", "I measure whether an index actually helps."]
  },
  {
    id: "l-db-explain-query-plans",
    stage: "databases",
    module: "Query Performance",
    title: "EXPLAIN, Query Plans & Performance Diagnosis",
    what: "PostgreSQL's planner chooses an execution plan for each query, and EXPLAIN exposes the plan so you can reason about scans, joins, sorting, aggregation, estimates, and costs.",
    why: "Query tuning based only on intuition is unreliable. The plan shows what PostgreSQL actually intends to do, while EXPLAIN ANALYZE lets you compare estimates with observed execution.",
    mentalModel: "Read an execution plan as a tree from the lower-level row sources upward: identify the expensive operation, compare estimated and actual rows, then test one change at a time.",
    coreConcepts: ["EXPLAIN", "EXPLAIN ANALYZE", "Sequential scans", "Index and bitmap scans", "Join nodes", "Sort and aggregate nodes", "Estimated versus actual rows", "Planner cost", "Statistics and ANALYZE", "Measure-before-optimize"],
    example: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE customer_id = 42;",
    code: "EXPLAIN ANALYZE\nSELECT c.id, COUNT(o.id)\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nGROUP BY c.id;",
    commonMistakes: ["Treating planner cost as milliseconds", "Reading only the top node", "Ignoring actual-versus-estimated row counts", "Optimizing a query without representative data", "Changing multiple variables before measuring again"],
    practice: "Read an EXPLAIN plan and identify the scan, join, sort, or aggregation node that deserves investigation.",
    challenge: "Diagnose a slow query, form a hypothesis, make one change, rerun EXPLAIN ANALYZE, and explain whether the evidence supports the change.",
    miniProject: "Build a query-optimization lab where a slow query is diagnosed with EXPLAIN ANALYZE, improved with a justified schema/query change, and measured before and after.",
    resources: [
      { title: "PostgreSQL 18 — Using EXPLAIN", url: "https://www.postgresql.org/docs/18/using-explain.html", note: "Official guide to query plans and EXPLAIN ANALYZE." },
      { title: "PostgreSQL — EXPLAIN command", url: "https://www.postgresql.org/docs/18/sql-explain.html", note: "Official EXPLAIN syntax and options." }
    ],
    mastery: ["I can identify scan and join nodes in a plan.", "I can compare estimated and actual row counts.", "I understand planner cost is not wall-clock time.", "I can run a measured optimization experiment."]
  },
  {
    id: "l-db-transactions-isolation-concurrency",
    stage: "databases",
    module: "Concurrency Control",
    title: "Transactions, Isolation & Concurrency",
    what: "Transactions group database operations into atomic units, while isolation and concurrency controls determine how simultaneous transactions interact.",
    why: "Real systems have concurrent requests. Without clear transaction boundaries and integrity guarantees, otherwise-correct application logic can produce lost updates, inconsistent reads, or broken business invariants.",
    mentalModel: "Define the invariant first, then choose the smallest transaction that must preserve it and understand which concurrent outcomes the selected isolation level permits.",
    coreConcepts: ["BEGIN, COMMIT, ROLLBACK", "ACID", "Read Committed", "Repeatable Read", "Serializable", "Dirty, non-repeatable, and phantom reads", "Row locking concept", "Deadlocks", "Database constraints versus application checks"],
    example: "BEGIN; UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 7 AND quantity > 0; COMMIT;",
    code: "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
    commonMistakes: ["Assuming application checks are atomic", "Making transactions unnecessarily large", "Ignoring rollback paths", "Treating isolation levels as interchangeable", "Failing to design for deadlock retries"],
    practice: "Identify the transaction boundary for an order that reserves inventory and creates payment and ledger records.",
    challenge: "Model two concurrent inventory purchases and explain how constraints, locking, or isolation prevent overselling.",
    miniProject: "Build a transaction and concurrency lab that demonstrates a race condition, then fixes it with a database-backed integrity strategy and regression test.",
    resources: [
      { title: "PostgreSQL 18 — Transactions", url: "https://www.postgresql.org/docs/18/tutorial-transactions.html", note: "Official transaction tutorial." },
      { title: "PostgreSQL 18 — Transaction Isolation", url: "https://www.postgresql.org/docs/18/transaction-iso.html", note: "Official isolation-level and concurrency behavior reference." }
    ],
    mastery: ["I can define a transaction boundary from a business invariant.", "I can explain ACID in practical terms.", "I can distinguish the major isolation levels conceptually.", "I can explain why database constraints matter under concurrency."]
  },
  {
    id: "l-db-schema-migrations",
    stage: "databases",
    module: "Database Engineering",
    title: "Schema Migrations & Database Engineering",
    what: "Schema migrations treat database structure as versioned, reviewable change rather than manual edits performed directly against environments.",
    why: "Once an application has multiple environments and deployed versions, undocumented schema changes become a major source of drift and deployment failures.",
    mentalModel: "A migration is a controlled step in the schema's history: define the change, make it reproducible, consider existing data, deploy safely, and verify the resulting state.",
    coreConcepts: ["Migration history", "DDL as versioned change", "Forward and rollback thinking", "Adding columns safely", "Backfilling existing rows", "Adding constraints safely", "Seed/reference data", "Development versus production schema", "ORM migrations versus SQL migrations", "Expand-and-contract changes"],
    example: "ALTER TABLE users ADD COLUMN display_name text;",
    code: "ALTER TABLE users ADD COLUMN display_name text;\nUPDATE users SET display_name = name WHERE display_name IS NULL;\nALTER TABLE users ALTER COLUMN display_name SET NOT NULL;",
    commonMistakes: ["Editing production schema manually without recording the change", "Adding a NOT NULL column without handling existing rows", "Assuming rollback is always safe after data changes", "Combining unrelated schema changes into one migration"],
    practice: "Plan a migration that adds a required field to a populated table without breaking the currently deployed application.",
    challenge: "Design an expand-and-contract migration for renaming a column while an older application version is still running.",
    miniProject: "Create a production-style migration sequence for a real project, including schema changes, data backfill, constraints, verification, and a documented deployment order.",
    resources: [
      { title: "PostgreSQL 18 — Data Definition", url: "https://www.postgresql.org/docs/18/ddl.html", note: "Official DDL and schema-definition reference." },
      { title: "Prisma — Migrate", url: "https://www.prisma.io/docs/orm/prisma-migrate", note: "Practical example of migration-based schema versioning from a widely used ORM." }
    ],
    mastery: ["I can explain why schema changes belong in version control.", "I can plan a safe migration for existing data.", "I can distinguish schema rollback from data rollback.", "I can reason about compatibility between application versions during a migration."]
  }
];

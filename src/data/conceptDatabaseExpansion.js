export const conceptDatabaseExpansion = [
  {
    id: "c-db-normalization-denormalization",
    stage: "databases",
    title: "Normalization vs Denormalization",
    summary: "Normalization separates independent facts to reduce duplication and anomalies; denormalization deliberately duplicates or precomputes data when a measured access pattern justifies the added consistency cost.",
    points: [
      "1NF removes repeating groups and keeps values atomic.",
      "2NF addresses dependencies on only part of a composite key.",
      "3NF separates facts that depend on non-key attributes rather than the key itself.",
      "Normalization is about dependencies and facts, not a fixed number of tables.",
      "Denormalization should be an explicit performance or operational trade-off, with a plan for keeping duplicated data consistent."
    ],
    example: "Instead of storing a customer's address on every order row, keep customer facts in the customer relation and store the order's historical shipping address separately when the business requires historical snapshots.",
    resources: [{ title: "PostgreSQL Constraints", url: "https://www.postgresql.org/docs/18/ddl-constraints.html", note: "Official constraints reference for enforcing relational invariants." }]
  },
  {
    id: "c-db-null-three-valued-logic",
    stage: "databases",
    title: "SQL NULL & Three-Valued Logic",
    summary: "NULL represents an unknown or missing value, so SQL comparisons can evaluate to TRUE, FALSE, or UNKNOWN rather than ordinary two-valued boolean logic.",
    points: [
      "Use IS NULL and IS NOT NULL instead of = NULL or <> NULL.",
      "WHERE keeps rows whose predicate evaluates to TRUE; UNKNOWN is not TRUE.",
      "COUNT(column) ignores NULL while COUNT(*) counts rows.",
      "COALESCE can provide an explicit fallback value, but it should not hide meaningful missing-data semantics.",
      "NULL behavior should be considered when designing joins, aggregates, constraints, and application serialization."
    ],
    example: "SELECT COUNT(*) AS rows, COUNT(phone) AS rows_with_phone FROM customers;",
    resources: [{ title: "PostgreSQL — Conditional Expressions", url: "https://www.postgresql.org/docs/18/functions-conditional.html", note: "Official reference for CASE, COALESCE, and NULL-aware expressions." }]
  },
  {
    id: "c-db-ctes-query-composition",
    stage: "databases",
    title: "CTEs & Query Composition",
    summary: "A Common Table Expression names an intermediate relational result so a complex query can be structured as explicit transformations.",
    points: [
      "Use WITH to give an intermediate result a meaningful name.",
      "Chain CTEs when each step represents a distinct transformation.",
      "A CTE can improve readability without guaranteeing a particular execution strategy.",
      "Recursive CTEs provide a SQL mechanism for hierarchical or graph-like traversal.",
      "Use a subquery instead when the intermediate result is trivial and naming it would add noise."
    ],
    example: "WITH totals AS (SELECT customer_id, SUM(total) AS spend FROM orders GROUP BY customer_id) SELECT * FROM totals WHERE spend > 1000;",
    resources: [{ title: "PostgreSQL — WITH Queries", url: "https://www.postgresql.org/docs/18/queries-with.html", note: "Official CTE and recursive-query documentation." }]
  },
  {
    id: "c-db-window-functions",
    stage: "databases",
    title: "Window Functions",
    summary: "Window functions calculate over related rows while preserving the individual result rows, enabling rankings, running totals, and row-to-row comparisons.",
    points: [
      "OVER defines the window used by the function.",
      "PARTITION BY separates rows into independent groups without collapsing them.",
      "ORDER BY inside OVER defines calculation order and can affect the window frame.",
      "ROW_NUMBER, RANK, and DENSE_RANK solve different ranking requirements.",
      "To filter a window result, use a subquery or CTE because window functions execute after WHERE/GROUP BY/HAVING at that query level."
    ],
    example: "ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY price DESC)",
    resources: [{ title: "PostgreSQL 18 — Window Functions", url: "https://www.postgresql.org/docs/18/tutorial-window.html", note: "Official tutorial with partitions, ordering, frames, and ranking." }]
  },
  {
    id: "c-db-indexes-selectivity",
    stage: "databases",
    title: "Database Indexes & Selectivity",
    summary: "An index provides an alternate access path to table data. Its usefulness depends on query predicates, ordering, data distribution, and the cost of maintaining the index.",
    points: [
      "Indexes can reduce the rows PostgreSQL must inspect for selective predicates.",
      "Composite-index column order matters because it should match important access patterns.",
      "Partial and expression indexes can target specific workloads.",
      "Every additional index consumes storage and adds maintenance work to writes.",
      "The planner may correctly choose a sequential scan when a large fraction of a table is needed."
    ],
    example: "CREATE INDEX idx_orders_customer_created ON orders(customer_id, created_at DESC);",
    resources: [
      { title: "PostgreSQL 18 — Indexes", url: "https://www.postgresql.org/docs/18/indexes.html", note: "Official index concepts and types." },
      { title: "Use The Index, Luke!", url: "https://use-the-index-luke.com/", note: "Practical SQL indexing education." }
    ]
  },
  {
    id: "c-db-query-plans",
    stage: "databases",
    title: "Reading PostgreSQL Query Plans",
    summary: "EXPLAIN exposes the planner's execution tree so you can investigate scans, joins, sorting, aggregation, estimated rows, actual rows, and costs.",
    points: [
      "Read a plan as a tree of operations from row sources upward.",
      "Sequential, index, and bitmap scans are different access strategies.",
      "Join nodes explain how PostgreSQL combines rows from multiple inputs.",
      "EXPLAIN ANALYZE adds observed execution behavior, including actual row counts and timing-related information.",
      "Planner cost is an internal comparison metric, not a direct measurement in milliseconds."
    ],
    example: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE customer_id = 42;",
    resources: [
      { title: "PostgreSQL 18 — Using EXPLAIN", url: "https://www.postgresql.org/docs/18/using-explain.html", note: "Official plan-reading guide." },
      { title: "PostgreSQL 18 — EXPLAIN", url: "https://www.postgresql.org/docs/18/sql-explain.html", note: "Official EXPLAIN command reference." }
    ]
  },
  {
    id: "c-db-transaction-isolation",
    stage: "databases",
    title: "Transaction Isolation & Concurrency",
    summary: "Isolation controls how concurrent transactions observe one another, while constraints and locks protect database invariants when operations overlap.",
    points: [
      "A transaction groups related changes so they commit or roll back together.",
      "Read Committed, Repeatable Read, and Serializable provide progressively stronger guarantees with different concurrency implications.",
      "Application-level read-then-write checks can race under concurrency.",
      "Database constraints remain important even when application validation exists.",
      "Locks and deadlocks are normal concurrency concerns that must be understood and handled rather than ignored."
    ],
    example: "A stock reservation should protect the invariant that inventory cannot become negative even when two requests arrive at nearly the same time.",
    resources: [
      { title: "PostgreSQL 18 — Transactions", url: "https://www.postgresql.org/docs/18/tutorial-transactions.html", note: "Official transaction tutorial." },
      { title: "PostgreSQL 18 — Transaction Isolation", url: "https://www.postgresql.org/docs/18/transaction-iso.html", note: "Official isolation-level behavior." }
    ]
  }
];

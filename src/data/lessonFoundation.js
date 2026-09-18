export const lessonFoundation = [
  {
    id: "l-foundation-algorithms-pseudocode",
    stage: "foundation",
    module: "Problem Solving",
    title: "Algorithms & Pseudocode",
    what: "An algorithm is a finite, ordered procedure for solving a problem. Pseudocode is a language-neutral way to describe that procedure before committing to the syntax of a programming language.",
    why: "Programming becomes much easier when you separate problem-solving from syntax. If the logic is unclear in plain language, writing it in JavaScript will usually only hide the confusion behind punctuation.",
    mentalModel: "Think of a recipe or route. The algorithm is the route from the starting condition to the desired result. Pseudocode is the written route before you decide whether the final instructions will be expressed in JavaScript, Python, or another language.",
    coreConcepts: [
      "Sequence: instructions execute in a meaningful order.",
      "Selection: a decision chooses between different paths, such as IF/ELSE.",
      "Iteration: a repeated action continues while a condition remains true or for a known number of items.",
      "Inputs and outputs define what information an algorithm receives and what result it produces.",
      "Decomposition breaks a large problem into smaller problems that can be solved independently.",
      "Edge cases are valid or unusual inputs that can expose missing logic.",
      "Termination matters: every loop or repeated process needs a condition under which it can finish."
    ],
    example: "ATM withdrawal: 1) Receive withdrawal amount. 2) Check whether the amount is positive. 3) Check whether the account has enough balance. 4) If both checks pass, subtract the amount and dispense cash. 5) Otherwise show the appropriate reason for refusing the transaction.",
    code: "// Pseudocode\nFUNCTION withdraw(balance, amount)\n  IF amount <= 0\n    RETURN \"Invalid amount\"\n  IF amount > balance\n    RETURN \"Insufficient balance\"\n  RETURN balance - amount\n\n// JavaScript translation\nfunction withdraw(balance, amount) {\n  if (amount <= 0) return \"Invalid amount\";\n  if (amount > balance) return \"Insufficient balance\";\n  return balance - amount;\n}",
    commonMistakes: [
      "Starting to code before defining the problem and expected output.",
      "Writing vague pseudocode such as 'process the data' instead of stating the actual operation.",
      "Ignoring invalid inputs and edge cases because the normal example works.",
      "Creating a loop without being able to explain exactly when it stops."
    ],
    practice: "Write pseudocode for three everyday problems: calculating a shopping total, deciding whether a user may log in, and classifying a temperature as cold, moderate, or hot.",
    challenge: "Write an algorithm for password validation with at least four rules. It should report which rule failed rather than simply returning 'invalid'. Include empty input as an edge case.",
    miniProject: "Design a number-guessing game on paper first. Define its inputs, outputs, rules, loop condition, and edge cases in pseudocode. Then translate the algorithm into JavaScript and test it with several inputs.",
    resources: [
      { title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/", note: "Builds computational problem-solving before and alongside programming syntax." },
      { title: "MDN — Programming concepts", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting", note: "Practical reference for turning logic into JavaScript." }
    ],
    mastery: [
      "I can describe an algorithm independently of a programming language.",
      "I can use sequence, decisions, and repetition to model a problem.",
      "I can identify edge cases and define when an algorithm terminates.",
      "I can turn clear pseudocode into straightforward JavaScript."
    ]
  },
  {
    id: "l-foundation-internet",
    stage: "foundation",
    module: "Networking Fundamentals",
    title: "How the Internet Works",
    what: "The internet is a global network of interconnected networks. Devices exchange data by dividing information into packets and forwarding those packets through routers and other network infrastructure using agreed protocol rules.",
    why: "Web development sits on top of networking. Knowing what happens between your device and a remote server makes browser behavior, latency, connectivity failures, and deployment much easier to reason about.",
    mentalModel: "Think of a logistics system. A large shipment is divided into smaller packages, each carries addressing information, and intermediary hubs decide where packages should go next. The internet works on the same broad principle, although its protocols and guarantees are very different from postal delivery.",
    coreConcepts: [
      "A client is a device or program requesting a service; a server provides a service to clients.",
      "Packets are units of network data that travel through interconnected networks.",
      "Routers forward packets toward their destinations based on network addressing information.",
      "An ISP provides connectivity from your local network to other networks on the internet.",
      "IP provides addressing and routing; TCP and UDP provide different transport behaviors.",
      "TLS provides encryption and authentication for protocols such as HTTPS.",
      "The World Wide Web is one service built on the internet; the internet and the web are not synonyms."
    ],
    example: "When you open a website, your device uses a network connection to resolve the destination, establish the appropriate connection, send a request, receive packets containing the response, and let the browser reconstruct and process that data.",
    code: "// You can observe the networking layer without writing a server.\n// Open a page, then use Browser DevTools → Network.\n// Reload the page and inspect the requests.\n// Look at: request URL, method, status, response, timing, and headers.",
    commonMistakes: [
      "Treating the internet and the World Wide Web as the same thing.",
      "Assuming Wi-Fi itself is the internet; Wi-Fi is a local wireless networking technology.",
      "Imagining that every request travels directly from your laptop to the destination machine with no intermediate networks.",
      "Assuming a server is always a single physical computer rather than a service that may run across multiple machines."
    ],
    practice: "Trace the broad path from your laptop or phone to a public website. Identify your local network, router, ISP, the wider internet, and the destination service.",
    challenge: "Explain to another beginner why a website can be physically far away yet still respond in a fraction of a second, and why distance can still contribute to latency.",
    miniProject: "Create a one-page 'Web Request Map' showing the journey from browser to website: device → local network → router/ISP → internet → destination server → response → browser.",
    resources: [
      { title: "MDN — How does the Internet work?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work", note: "Accessible explanation of the internet's basic architecture." },
      { title: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/", note: "Useful explanations of networking, DNS, HTTP, TLS, and related infrastructure." }
    ],
    mastery: [
      "I can explain the internet as a network of interconnected networks.",
      "I can describe the roles of packets, routers, IP, and transport protocols at a high level.",
      "I can distinguish the internet from the web.",
      "I can use browser Network tools to observe real web traffic."
    ]
  },
  {
    id: "l-foundation-url-dns-ip",
    stage: "foundation",
    module: "Web Addressing",
    title: "URLs, Domains, DNS & IP Addresses",
    what: "A URL identifies a resource and describes how to access it. A domain is a human-readable name, DNS resolves names to network addresses, and an IP address identifies a destination on an IP network.",
    why: "These concepts explain what your browser actually does when you enter a web address and give you a foundation for diagnosing DNS, routing, hosting, and URL problems.",
    mentalModel: "A domain name is like a contact name and an IP address is like the number needed to reach that contact. DNS is the directory service that helps translate the human-friendly name into an address. A URL contains more information than either one.",
    coreConcepts: [
      "A URL can contain a scheme, host, port, path, query string, and fragment.",
      "A domain name is the human-readable naming part of a web address; it is not the whole URL.",
      "DNS resolvers answer name-resolution queries and commonly use caches to avoid repeating work unnecessarily.",
      "IPv4 and IPv6 are versions of the Internet Protocol addressing system.",
      "A port identifies a network service endpoint on a host; HTTPS commonly uses port 443.",
      "The path and query are part of the URL used by the application; they are not what DNS resolves."
    ],
    example: "For `https://example.com:443/products?id=7#reviews`: `https` is the scheme, `example.com` is the host, `443` is the port, `/products` is the path, `id=7` is the query, and `#reviews` is the fragment handled by the browser.",
    code: "const url = new URL(\"https://example.com:443/products?id=7#reviews\");\n\nconsole.log(url.protocol); // https:\nconsole.log(url.hostname); // example.com\nconsole.log(url.port);     // 443\nconsole.log(url.pathname); // /products\nconsole.log(url.search);   // ?id=7\nconsole.log(url.hash);     // #reviews",
    commonMistakes: [
      "Calling the entire URL a domain.",
      "Thinking DNS contains or serves the website itself; DNS primarily provides name resolution.",
      "Assuming an IP address is a permanent identity for a website; hosting arrangements and addresses can change.",
      "Thinking DNS needs the URL path; DNS resolves hostnames, while paths are handled after a connection to the host is made."
    ],
    practice: "Take five real URLs and label every component you can identify: scheme, host, port, path, query, and fragment.",
    challenge: "Explain the difference between entering a domain in a browser and requesting a specific URL path on that domain. Include where DNS fits into the sequence.",
    miniProject: "Build a 'URL Journey' diagram that starts with a complete URL, extracts its components, shows DNS resolution for the hostname, then shows how the browser uses the resolved destination to make the web request.",
    resources: [
      { title: "MDN — What is a URL?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL", note: "Clear breakdown of URL components." },
      { title: "Cloudflare — What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/", note: "Practical explanation of DNS resolution and caching." }
    ],
    mastery: [
      "I can parse a URL into its major components.",
      "I can explain what DNS does and what it does not do.",
      "I can distinguish a domain, hostname, IP address, port, and URL.",
      "I can describe where DNS occurs in a browser request sequence."
    ]
  },
  {
    id: "l-foundation-http",
    stage: "foundation",
    module: "Web Protocols",
    title: "HTTP & Request/Response",
    what: "HTTP is an application-layer protocol used by web clients and servers to communicate. A client sends an HTTP request and a server returns an HTTP response containing a status, headers, and often a body.",
    why: "HTTP is the language your browser and web servers use to exchange web resources. Understanding requests and responses is essential for frontend development, APIs, backend work, and debugging.",
    mentalModel: "Think of a structured conversation. The client asks for something using a specific method and provides context in headers and possibly a body. The server responds with a status that describes the result, metadata in headers, and optional content in the response body.",
    coreConcepts: [
      "HTTP methods describe intended operations: GET retrieves, POST submits/creates, PUT replaces, PATCH partially updates, and DELETE requests removal.",
      "Status codes communicate broad outcomes: 2xx success, 3xx redirection, 4xx client/request problems, and 5xx server-side failures.",
      "Headers carry metadata such as content type, caching information, authorization data, and cookies.",
      "A request or response body carries content such as JSON, HTML, form data, or other representations when applicable.",
      "HTTPS is HTTP protected by TLS, providing encryption and server authentication for the connection.",
      "HTTP itself is not HTML; HTML is one kind of content that can be transported using HTTP."
    ],
    example: "A browser might send `GET /products` with an `Accept` header. The server could return `200 OK`, a `Content-Type: application/json` header, and a JSON body containing the products.",
    code: "async function loadProducts() {\n  const response = await fetch(\"/api/products\");\n\n  console.log(response.status);\n  console.log(response.headers.get(\"content-type\"));\n\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n\n  const products = await response.json();\n  console.log(products);\n}",
    commonMistakes: [
      "Thinking a 404 means the internet is down; it usually means the requested resource or route was not found at that server.",
      "Thinking a 500 error is automatically a browser problem; it indicates that the server encountered an error while handling the request.",
      "Treating GET and POST as interchangeable without considering their intended semantics.",
      "Looking only at the status code and ignoring the response body, headers, and request details that explain the failure."
    ],
    practice: "Open DevTools → Network, reload a website, select a document or API request, and identify its method, URL, status code, request headers, response headers, and response body where available.",
    challenge: "Given a request that returns 401, 404, 429, and 500 in different situations, explain what each class of failure tells you and what evidence you would inspect next.",
    miniProject: "Create an HTTP request/response worksheet from a real public page or your own project. Record one request, its response, the important headers, status, and a short explanation of what happened.",
    resources: [
      { title: "MDN — An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview", note: "Authoritative overview of HTTP requests, responses, methods, status codes, and headers." },
      { title: "MDN — HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status", note: "Reference for interpreting response status codes." }
    ],
    mastery: [
      "I can describe the structure and purpose of an HTTP request and response.",
      "I can distinguish common HTTP methods and status-code classes.",
      "I can inspect a request in DevTools and explain what happened.",
      "I understand that HTTPS adds TLS protection to HTTP communication."
    ]
  },
  {
    id: "l-foundation-client-server-browser",
    stage: "foundation",
    module: "Web Architecture",
    title: "Client, Server & Browser — Putting It Together",
    what: "A browser acts as a web client: it makes requests, receives resources, executes JavaScript, and renders the interface. A server receives requests, performs application logic and data operations, and sends responses back to clients.",
    why: "This connects the earlier networking concepts into one working mental model. Once you understand the complete browser-to-server cycle, frontend and backend responsibilities stop looking like unrelated technologies.",
    mentalModel: "Think of a restaurant. The browser is the customer-facing side placing an order. The server receives the order, performs the work, accesses the required resources, and returns the result. The browser then turns the returned data and code into the interface the user sees. Real web systems are more complex, but the separation is useful.",
    coreConcepts: [
      "The browser is a client application, not the internet itself.",
      "HTML provides document structure, CSS controls presentation, and JavaScript adds behavior and application logic in the browser.",
      "A server can serve static files or execute application code to generate dynamic responses.",
      "APIs expose server capabilities or data through defined interfaces, commonly over HTTP.",
      "A page load can involve many requests for HTML, CSS, JavaScript, images, fonts, and API data.",
      "Browser caching can reduce repeated network work, but cached content can also become stale and is therefore part of debugging considerations."
    ],
    example: "When you open an app, the browser requests the initial HTML. It then discovers CSS and JavaScript resources and requests them. JavaScript may make additional API requests. The server processes those requests and returns data, after which the browser updates the page.",
    code: "// Browser/client side\nasync function loadUser() {\n  const response = await fetch(\"/api/user\");\n  if (!response.ok) throw new Error(\"Could not load user\");\n\n  const user = await response.json();\n  document.querySelector(\"#name\").textContent = user.name;\n}\n\nloadUser();\n\n// The server-side endpoint is responsible for deciding\n// how /api/user is handled and what response is returned.",
    commonMistakes: [
      "Thinking the browser directly contains the backend or database.",
      "Assuming HTML is the backend; HTML is a document format rendered by the client.",
      "Treating an API as a database; an API is an interface through which software can request or submit data or operations.",
      "Debugging only the visible UI instead of checking the request, server response, and data flow behind it."
    ],
    practice: "Pick a familiar website and narrate its page-load sequence: browser request, server response, resource requests, JavaScript execution, API calls, and final rendering.",
    challenge: "For a simple login flow, identify what belongs in the browser, what belongs on the server, what travels over HTTP, and why authentication decisions cannot be trusted to client-side code alone.",
    miniProject: "Build a 'Page Loading Map' for one of your projects. Draw the browser, server, API, and any database as separate components, then label each request and response between them. Verify the map against your DevTools Network panel.",
    resources: [
      { title: "MDN — How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works", note: "Connects browsers, servers, DNS, HTTP, and web resources." },
      { title: "MDN — Client-server overview", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work", note: "Useful background for the client/server relationship." }
    ],
    mastery: [
      "I can explain the complete high-level journey from browser action to server response and rendered UI.",
      "I can distinguish client responsibilities from server responsibilities.",
      "I can explain the roles of HTML, CSS, JavaScript, HTTP, APIs, and databases at a high level.",
      "I can use DevTools to verify my mental model against real network activity."
    ]
  }
];

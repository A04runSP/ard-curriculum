export const conceptFoundation = [
  {
    id: "c-foundation-programming",
    stage: "foundation",
    module: "Programming Fundamentals",
    title: "What Is Programming?",
    what: "Programming is the practice of describing precise instructions and rules that a computer can execute to transform inputs into useful outputs.",
    why: "Programming is more than learning syntax. The durable skill is expressing a problem clearly enough that a machine can execute the solution consistently.",
    keyPoints: ["A program defines behavior; syntax is language-specific notation.","Programs operate on inputs, state, processing, and outputs.","Computers do not reliably infer unstated intent.","Debugging finds the difference between intended and actual behavior."],
    resource: { title: "MDN — JavaScript basics", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript" }
  },
  {
    id: "c-foundation-algorithms-code",
    stage: "foundation",
    module: "Problem Solving",
    title: "Algorithms vs Code",
    what: "An algorithm is the underlying procedure for solving a problem; code is a concrete implementation of that procedure in a programming language.",
    why: "Separating these ideas helps you change languages, reason about logic before syntax, and diagnose whether a bug is in the algorithm or its implementation.",
    keyPoints: ["One algorithm can be implemented in many languages.","Pseudocode expresses logic without committing to language syntax.","A correct algorithm can still have a buggy implementation.","A well-written program can still solve the wrong problem."],
    resource: { title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/" }
  },
  {
    id: "c-foundation-internet-web",
    stage: "foundation",
    module: "Networking Fundamentals",
    title: "The Internet vs the Web",
    what: "The internet is the underlying global network infrastructure and protocol ecosystem. The World Wide Web is a service that uses that infrastructure, especially HTTP, to exchange web resources.",
    why: "Keeping the terms distinct prevents confusion when learning DNS, HTTP, APIs, hosting, and networking.",
    keyPoints: ["The internet supports many services beyond the web.","The web uses URLs, HTTP, HTML, CSS, and JavaScript.","Internet connectivity does not mean you are necessarily using the web.","Browser traffic is one example of traffic crossing the broader internet."],
    resource: { title: "MDN — How does the Internet work?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work" }
  },
  {
    id: "c-foundation-dns",
    stage: "foundation",
    module: "Web Addressing",
    title: "DNS, Domains & IP Addresses",
    what: "DNS provides name resolution so software can translate human-readable domain names into IP addresses used for network communication.",
    why: "DNS sits near the beginning of many web requests and is essential for understanding domains, hosting, and connectivity failures.",
    keyPoints: ["A domain/hostname is a name; an IP address is a network address.","DNS resolvers can cache answers.","DNS resolution concerns hostnames, not URL paths.","IPv4 and IPv6 are different versions of IP addressing."],
    resource: { title: "Cloudflare — What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" }
  },
  {
    id: "c-foundation-http",
    stage: "foundation",
    module: "Web Protocols",
    title: "HTTP Request & Response",
    what: "HTTP defines a structured exchange in which a client sends a request and a server returns a response, including metadata and optional content.",
    why: "HTTP is the common boundary between browser applications, APIs, and servers. Learning to read it is central to web debugging.",
    keyPoints: ["Requests contain a method, target, headers, and sometimes a body.","Responses contain a status code, headers, and sometimes a body.","2xx generally means success, 3xx redirection, 4xx request/client problem, and 5xx server failure.","HTTPS is HTTP protected with TLS."],
    resource: { title: "MDN — An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }
  },
  {
    id: "c-foundation-client-server",
    stage: "foundation",
    module: "Web Architecture",
    title: "Client vs Server",
    what: "A client initiates requests for a service, while a server provides the service and returns responses. In web applications, the browser is commonly the client and backend software commonly acts as the server.",
    why: "This boundary gives you a practical map for deciding where code runs and where to investigate when a web application fails.",
    keyPoints: ["Client-side code runs in the user's environment, commonly the browser.","Server-side code runs in application infrastructure.","A server may call databases or other services before responding.","One page load can involve many requests.","Client validation cannot replace server-side authorization and validation."],
    resource: { title: "MDN — How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" }
  }
];

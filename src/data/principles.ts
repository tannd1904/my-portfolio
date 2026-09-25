export interface EngineeringPrinciple {
  number: string;
  title: string;
  description: string;
}

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: "01",
    title: "Design for failure.",
    description:
      "Network partitions, timeouts, and downstream degradations will happen. Resilient systems anticipate failure through timeouts, retries with backoff, circuit breaking, and graceful degradation.",
  },
  {
    number: "02",
    title: "Prefer explicit boundaries.",
    description:
      "Loose coupling starts with explicit domain contracts. Clearly defined service boundaries prevent accidental coupling and maintain conceptual integrity across distributed systems.",
  },
  {
    number: "03",
    title: "Keep services independently evolvable.",
    description:
      "Microservices exist to enable independent deployments and isolated velocity. If deploying Service A requires lockstep deployment of Service B, you have built a distributed monolith.",
  },
  {
    number: "04",
    title: "Automate quality checks.",
    description:
      "Code quality and test coverage are not afterthought phases—they are non-negotiable pipeline gates. Static analysis and automated testing ensure architectural rules survive team scaling.",
  },
  {
    number: "05",
    title: "Treat observability and reliability as first-class concerns.",
    description:
      "A distributed system is only as reliable as its visibility. Structured logging, tracing, and health semantics must be designed alongside business requirements, not tacked on in production.",
  },
  {
    number: "06",
    title: "Keep architecture understandable.",
    description:
      "Sophistication is not complexity. The best enterprise architectures solve real business problems with the simplest patterns that satisfy scaling, consistency, and operational constraints.",
  },
];

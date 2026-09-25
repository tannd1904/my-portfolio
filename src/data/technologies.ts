export interface ArsenalCategory {
  id: string;
  categoryNumber: string;
  title: string;
  tagline: string;
  iconName: "network" | "commerce" | "database" | "shield";
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
    context: string;
  }[];
}

export const arsenalCategories: ArsenalCategory[] = [
  {
    id: "core-backend",
    categoryNumber: "01",
    title: "Core Backend & Architecture",
    tagline: "High-throughput, resilient enterprise application foundations",
    iconName: "network",
    technologies: [
      "Java 11 / 17",
      "Spring Boot 3",
      "Spring Security 6",
      "Microservices",
      "Domain-Driven Design",
      "RESTful APIs",
    ],
  },
  {
    id: "enterprise-commerce",
    categoryNumber: "02",
    title: "Enterprise E-Commerce",
    tagline: "Scalable digital retail solutions & transactional flows",
    iconName: "commerce",
    technologies: [
      "SAP Commerce Cloud",
      "Hybris",
      "Headless Commerce",
      "Payment Gateways",
    ],
  },
  {
    id: "data-storage",
    categoryNumber: "03",
    title: "Data & Storage",
    tagline: "Relational persistence, cache layers & automated migrations",
    iconName: "database",
    technologies: [
      "PostgreSQL",
      "MSSQL",
      "Oracle",
      "Liquibase",
      "Flyway",
      "Redis",
      "Caching Strategies",
    ],
  },
  {
    id: "devops-quality",
    categoryNumber: "04",
    title: "DevOps & Quality",
    tagline: "Continuous delivery pipelines & rigorous automated verification",
    iconName: "shield",
    technologies: [
      "Docker",
      "Jenkins CI/CD",
      "SonarQube",
      "JUnit",
      "Mockito",
    ],
    metrics: [
      {
        label: "Code Smell",
        value: "< 5%",
        context: "SonarQube gate on Bosch & enterprise pipelines",
      },
      {
        label: "Test Coverage",
        value: "> 80%",
        context: "JUnit / Mockito coverage on business-critical logic",
      },
    ],
  },
];

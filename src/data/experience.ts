export interface CareerEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  project: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

export const careerTimeline: CareerEntry[] = [
  {
    id: "sai-digital",
    period: "08/2024 – Present",
    role: "Senior Software Engineer",
    company: "SAI Digital",
    location: "Ho Chi Minh City, Vietnam",
    project: "Toyota Motor Philippines Project",
    highlights: [
      "Leading microservices architecture and module decoupling from the SAP Commerce core.",
      "Designing resilient synchronous REST communication and asynchronous event-driven flows.",
      "Preserving distributed data integrity across independent commerce services.",
    ],
    skills: ["Java 17", "Spring Boot 3", "SAP Commerce Cloud", "Microservices", "Event-Driven Flows", "REST APIs"],
    isCurrent: true,
  },
  {
    id: "bosch",
    period: "02/2023 – 2024",
    role: "Software Engineer",
    company: "Bosch Global Software Technologies",
    location: "Tan Binh, Ho Chi Minh City",
    project: "OneDriving Portal & EET Portal",
    highlights: [
      "Upgraded enterprise systems: Java 11 → Java 17, Spring Boot 2 → Spring Boot 3, and Spring Security 5 → 6.",
      "Integrated Azure Active Directory Single Sign-On (SSO) for corporate identity management.",
      "Automated CI/CD workflows using Jenkins and database versioning using Liquibase on PostgreSQL.",
      "Maintained SonarQube code smells below 5% and test coverage above 80% with JUnit and Mockito.",
    ],
    skills: ["Java 17", "Spring Boot 3", "Spring Security 6", "Azure AD SSO", "PostgreSQL", "Liquibase", "Jenkins", "SonarQube", "Docker"],
  },
  {
    id: "it-services-japan",
    period: "10/2020 – 01/2023",
    role: "Software Engineer",
    company: "IT Services Japan Group",
    location: "Thu Duc City, Ho Chi Minh City",
    project: "Softbank Payment Service (SBPS)",
    highlights: [
      "Implemented payment transaction processing business logic with high operational reliability.",
      "Optimized over 200 TypeScript and Angular administrative screens interfacing with backend services.",
      "Standardized reusable OOP component templates and achieved over 80% unit test coverage using JUnit.",
      "Awarded Rookie Award 2022 by IT Services Japan Group; mentored 4 interns to full completion of probation.",
    ],
    skills: ["Java", "Spring Boot", "Transaction Processing", "JUnit", "Flyway", "TypeScript", "Angular"],
  },
  {
    id: "education-ptit",
    period: "2017 – 2021",
    role: "Information Technology Engineer",
    company: "Posts and Telecommunications Institute of Technology (PTIT)",
    location: "Vietnam",
    project: "Engineer's Degree in Information Technology",
    highlights: [
      "Rigorous foundations in computer science, distributed algorithms, data structures, and software engineering principles.",
      "Completed comprehensive curriculum covering object-oriented design, database theory, and networking.",
    ],
    skills: ["Computer Science", "Algorithms", "Data Structures", "Database Theory", "Software Engineering"],
  },
];

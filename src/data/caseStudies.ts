export interface CaseStudy {
  id: string;
  number: string;
  company: string;
  project: string;
  clientContext?: string;
  summary: string;
  challenge: string;
  approach: string[];
  technologies: string[];
  impact: string[];
  qualityMetrics?: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  confidentialityNotice?: string;
  hasInteractiveArchitecture?: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "toyota-modernization",
    number: "01",
    company: "SAI Digital",
    project: "Monolith to Microservices Modernization",
    clientContext: "Client: Toyota Motor Philippines",
    summary:
      "Modernizing a mission-critical automotive sales platform running on a SAP Commerce / Hybris core by decoupling business modules into scalable, resilient microservices.",
    challenge:
      "The existing platform relied on a central SAP Commerce monolithic core that limited rapid independent releases and scalability. The system required greater modularity and flexibility while reducing dependency on the monolithic core and enabling a more scalable distributed architecture.",
    approach: [
      "Participated in designing and implementing independent microservices to decouple monolithic dependencies.",
      "Separated key functional modules to isolate domain responsibilities and allow autonomous scaling.",
      "Engineered reliable synchronous REST endpoints alongside asynchronous communication flows for event-driven coordination.",
      "Addressed distributed data integrity and eventual consistency challenges across service boundaries.",
      "Designed within enterprise e-commerce architectural patterns to ensure zero disruption to ongoing automotive retail transactions.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "SAP Commerce Cloud",
      "Hybris",
      "Microservices",
      "Distributed Data Integrity",
      "RESTful APIs",
      "Event/Messaging Flows",
    ],
    impact: [
      "Successfully established decoupled service boundaries, decreasing direct runtime dependency on the SAP Commerce core.",
      "Delivered modular services enabling independent deployments and enhanced maintainability.",
      "Preserved transactional data integrity across asynchronous integration paths.",
    ],
    confidentialityNotice:
      "Architecture shown is a simplified conceptual representation due to client confidentiality.",
    hasInteractiveArchitecture: true,
  },
  {
    id: "bosch-enterprise",
    number: "02",
    company: "Bosch Global Software Technologies",
    project: "OneDriving & EET Portal",
    clientContext: "Enterprise Department & Hardware Engineering Portals",
    summary:
      "Modernizing enterprise backend frameworks, automating CI/CD pipelines, and establishing rigorous test automation standards for hardware project tracking and resource operations.",
    challenge:
      "Legacy enterprise services built on older runtimes required modernization to contemporary LTS baselines while adhering to strict corporate security standards, centralized authentication, and automated regression guarantees.",
    approach: [
      "Executed dual-system modernization upgrading runtimes from Java 11 to Java 17 and frameworks from Spring Boot 2 to Spring Boot 3.",
      "Upgraded and configured enterprise identity layer with Spring Security 6 and Azure Active Directory Single Sign-On (SSO).",
      "Engineered automated database migration workflows using Liquibase against PostgreSQL, standardizing reproducible schema versioning.",
      "Constructed Jenkins CI/CD pipelines to automate build, verification, and deployment phases, significantly accelerating release velocity.",
      "Treated code quality and automated testing as an integral part of the engineering workflow, backing services with JUnit and Mockito test suites.",
      "Enforced static analysis standards through SonarQube quality gates on every commit.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security 6",
      "Azure AD SSO",
      "PostgreSQL",
      "Liquibase",
      "Jenkins CI/CD",
      "SonarQube",
      "Docker",
      "JUnit / Mockito",
    ],
    impact: [
      "Achieved seamless, non-breaking upgrade across Java 17, Spring Boot 3, and Spring Security 6.",
      "Maintained SonarQube Code Smell rate strictly below 5% throughout production releases.",
      "Secured unit and integration test coverage exceeding 80% on critical business logic.",
      "Automated schema versioning and CI/CD pipelines, removing manual deployment overhead.",
    ],
    qualityMetrics: [
      {
        label: "Code Smell",
        value: "< 5%",
        sublabel: "SonarQube Quality Gate",
      },
      {
        label: "Automated Coverage",
        value: "> 80%",
        sublabel: "JUnit & Mockito Suites",
      },
    ],
  },
  {
    id: "softbank-payment",
    number: "03",
    company: "IT Services Japan Group",
    project: "Softbank Payment Service (SBPS)",
    clientContext: "Fintech & Payment Gateway Operations",
    summary:
      "Developing high-reliability payment transaction processing backends and optimizing 200+ TypeScript/Angular administrative interfaces connected to core financial services.",
    challenge:
      "Financial settlement flows demanded flawless execution accuracy, stringent state reconciliation, and high-performance communication between backend transaction processors and administrative interfaces.",
    approach: [
      "Engineered business logic for payment transaction processing and order request management within the Java Spring Boot backend.",
      "Optimized and maintained over 200 TypeScript and Angular screens connected to backend transaction services, improving responsiveness and user experience.",
      "Processed complex structured transaction files (YML, XML, XLSX) with strict validation routines to ensure data consistency.",
      "Applied object-oriented abstraction patterns to create standardized reusable business logic templates, boosting team implementation velocity.",
      "Mentored junior engineers and interns to ensure adherence to strict reliability standards and institutional workflows.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Transaction Processing",
      "PostgreSQL / Oracle",
      "Flyway",
      "JUnit",
      "TypeScript",
      "Angular",
    ],
    impact: [
      "Delivered resilient transaction processing flows ensuring high data fidelity.",
      "Successfully optimized 200+ screens connected to backend APIs with enhanced data loading times.",
      "Achieved > 80% unit test coverage using JUnit across backend service logic.",
      "Mentored 4 interns to successful probation completion within 5 months.",
    ],
  },
];

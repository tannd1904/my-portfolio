export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const keyMetrics: MetricItem[] = [
  {
    id: "experience",
    value: "5+",
    label: "Years Experience",
    description: "Enterprise backend development & distributed system architecture",
  },
  {
    id: "domains",
    value: "3+",
    label: "Enterprise Domains",
    description: "Automotive, Enterprise E-Commerce, and Fintech Platforms",
  },
  {
    id: "delivery",
    value: "100%",
    label: "On-time Migration Delivery",
    description: "Multi-version framework upgrades and architectural decoupling",
  },
];

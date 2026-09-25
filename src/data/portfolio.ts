export interface Profile {
  name: string;
  role: string;
  specialization: string;
  location: string;
  statusBadge: string;
  headline: string;
  subheadline: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  cvUrl: string;
}

export const profileData: Profile = {
  name: "Tan Nguyen Duy",
  role: "Senior Software Engineer",
  specialization: "Distributed Systems & Enterprise E-Commerce",
  location: "Ho Chi Minh City, Vietnam",
  statusBadge: "Based in Ho Chi Minh City • Open to impactful discussions",
  headline: "Crafting High-Performance Distributed Systems & Enterprise E-Commerce.",
  subheadline:
    "Senior Software Engineer with 5+ years of experience architecting resilient backends, migrating legacy monoliths to microservices, and delivering mission-critical platforms for global leaders like Toyota, Bosch, and Softbank.",
  email: process.env.NEXT_PUBLIC_EMAIL || "YOUR_EMAIL_HERE",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://linkedin.com/in/tan-nguyen-duy-461b1a21b",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tannguyenduy",
  cvUrl: "/cv.pdf",
};

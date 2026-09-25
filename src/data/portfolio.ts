export interface Profile {
  name: string;
  role: string;
  specialization: string;
  location: string;
  statusBadge: string;
  headline: string;
  subheadline: string;
  avatarUrl: string;
  email: string;
  phone: string;
  phoneRaw: string;
  linkedinUrl: string;
  githubUrl: string;
  cvUrl: string;
}

export const profileData: Profile = {
  name: "Tan Nguyen Duy",
  role: "Senior Software Engineer",
  specialization: "Java (11 / 17 / 21 / 23) • Distributed Systems & Enterprise E-Commerce",
  location: "Ho Chi Minh City, Vietnam",
  statusBadge: "Living in Ho Chi Minh City, Vietnam • Open to impactful discussions",
  headline: "Crafting High-Performance Distributed Systems & Enterprise E-Commerce.",
  subheadline:
    "Senior Software Engineer with 5+ years of experience architecting resilient backends, migrating legacy monoliths to microservices, and delivering mission-critical platforms for global leaders like Toyota, Bosch, and Softbank.",
  avatarUrl: "/avatar.jpg",
  email: process.env.NEXT_PUBLIC_EMAIL || "tannd1904@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+84 389 211 236",
  phoneRaw: "+84389211236",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://linkedin.com/in/tan-nguyen-duy-461b1a21b",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/tannd1904",
  cvUrl: "/cv.pdf",
};

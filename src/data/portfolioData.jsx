import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';
import foodImg from '../assets/food.png';

export const portfolioData = {
  hero: {
    name: "Raihan Mahmud",
    title: "Software Engineer",
    contactInfo: {
      email: "raihanmahmud20022011@gmail.com", // Replace with actual
      phone: "+880 1774514229", // Replace with actual
      contactFormKey: "6cb989d1-686d-4b11-89f1-99ec5d874391"
    },
    socialLinks: [
      { id: 1, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/raihan-mahmud-5675a7282/", label: "LinkedIn" },
      { id: 2, icon: <FaGithub />, url: "https://github.com/raihanmahmud", label: "GitHub" },
      { id: 3, icon: <FaEnvelope />, url: "mailto:raihanmahmud20022011@gmail.com", label: "Email" },
      { id: 4, icon: <FaFacebook />, url: "https://www.facebook.com/share/1PT8yZ6NU7/", label: "Facebook" },
    ]
  },
  about: {
    careerObjective: "To leverage my skills as a Software Engineer in a dynamic environment, contributing to innovative projects while continuously enhancing my technical expertise and problem-solving capabilities.",
    personalDetails: {
      location: "Rajshahi, Bangladesh",
      languages: "Bengali, English",
    },
    specialQualifications: [
      "Strong problem-solving abilities",
      "Excellent teamwork and leadership skills",
      "Adaptable to new technologies"
    ],
    quickStats: [
      { label: "Projects Completed", value: "10+" },
      { label: "Years of Experience", value: "1+" },
      { label: "Tech Stacks", value: "5+" }
    ]
  },
  education: [
    {
      id: 1,
      degree: "BSc in Information and Communication Engineering",
      institution: "Bangladesh Army University of Engineering and Technology (BAUET)",
      year: "2025",
      description: "Focused on software engineering, data structures, and algorithms."
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajshahi Govt. Model School and College",
      year: "2020",
      description: "Science Group"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Rajshahi Govt. Model School and College ",
      year: "2018",
      description: "Science Group"
    }
  ],
  experience: [
    {
      id: 1,
      role: "IT Internship",
      company: "Desktop IT as an IT Engineer",
      duration: "Jan 2024 - Apr 2024",
      description: "Developed and maintained web applications, optimized database queries, and collaborated with cross-functional teams."
    },
    {
      id: 2,
      role: "Joint Secretary",
      company: "ICT Club",
      duration: "2022 - 2023",
      description: "Organized tech fests, coding competitions, and workshops for students."
    },
    {
      id: 3,
      role: "Active Member",
      company: "Cultural Club",
      duration: "2021 - 2024",
      description: "Participated in organizing annual cultural events."
    }
  ],
  certifications: [
    { id: 1, name: "Project Showcasing Award", issuer: "Tech Fest 2023", date: "2023" },
    { id: 2, name: "Microcontroller & Raspberry Pi Training", issuer: "Robotics Society", date: "2022" },
  ],
  skills: [
    { id: 1, name: "Flutter", level: 85 },
    { id: 2, name: "UI/UX Design", level: 80 },
    { id: 3, name: "WordPress", level: 90 },
    { id: 4, name: "MS Office", level: 95 },
    { id: 5, name: "JavaScript", level: 80 },
    { id: 6, name: "HTML & CSS", level: 90 },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "Websites",
      image: foodImg,
      previewType: "image",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
      link: "food_delivery_app.html"
    },
    {
      id: 2,
      title: "ShebaBondhu App",
      category: "Images",
      image: "/shebabondhu/Screenshot 2026-05-01 150051.png",
      images: [
        "/shebabondhu/Screenshot 2026-05-01 150051.png",
        "/shebabondhu/Screenshot 2026-05-01 150134.png",
        "/shebabondhu/Screenshot 2026-05-01 150224.png",
        "/shebabondhu/Screenshot 2026-05-01 150254.png",
        "/shebabondhu/Screenshot 2026-05-01 150315.png",
        "/shebabondhu/Screenshot 2026-05-01 150334.png",
        "/shebabondhu/Screenshot 2026-05-01 150350.png",
        "/shebabondhu/Screenshot 2026-05-01 150456.png",
        "/shebabondhu/Screenshot 2026-05-01 150511.png",
        "/shebabondhu/Screenshot 2026-05-01 150525.png",
        "/shebabondhu/Screenshot 2026-05-01 150612.png",
        "/shebabondhu/Screenshot 2026-05-01 150640.png",
        "/shebabondhu/Screenshot 2026-05-01 150657.png",
        "/shebabondhu/Screenshot 2026-05-01 150710.png",
        "/shebabondhu/Screenshot 2026-05-01 150723.png"
      ],
      previewType: "image",
      technologies: ["Figma", "UI/UX", "App Design", "Prototyping"],
      description: "A comprehensive UI/UX design for 'ShebaBondhu', a service-based mobile application. The design features a fully mapped out brand identity, interactive chat screens, a seamless contractor booking flow, detailed customer profiles, and a robust search page. Built with a focus on modern aesthetics and user-friendly experience.",
      link: "#"
    },
    {
      id: 3,
      title: "Promo Video",
      category: "Videos",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      previewType: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      technologies: ["After Effects", "Premiere Pro"],
      description: "A promotional video created for a tech startup.",
      link: "#"
    }
  ],
  references: [
    {
      id: 1,
      name: "Partha Pratim Debnath",
      designation: "Assistant Professor & Head dept of ICE",
      institution: "Bangladesh Army University of Engineering & Technology",
      phone: "01746377565",
      relation: "Teacher"
    },
    {
      id: 2,
      name: "Md. Abdullah-Al-Rabby",
      designation: "Factory Head",
      institution: "GS ACCESSORIES (A concern of Bengal Hurricane Group)",
      phone: "01717797451",
      relation: "Cousin"
    }
  ]
};

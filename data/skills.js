// Import icons
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiC,
  SiAmazons3,
  SiCloudfoundry,
  SiNextdotjs,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SQL", icon: null, color: "#336791" },
    ],
  },
  {
    title: "Web & Frameworks",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "NextJS", icon: SiNextdotjs, color: "#1572B6" },
      { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
      { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
      { name: "ExpressJS", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "AWS (EC2, S3)", icon: SiAmazons3, color: "#FF9900" },
      { name: "Appwrite", icon: null, color: "#F02E65" },
      { name: "Cloudinary", icon: SiCloudfoundry, color: "#3448C5" },
    ],
  },
];

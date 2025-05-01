"use client";

import { motion } from "framer-motion";
import ProjectsCardContent from "@/components/home/ProjectsCardContent";

export default function ProjectCard({ project, fullWidth = false }) {
  return (
    <motion.div
      className={`group h-full rounded-xl bg-white dark:bg-secondary-900 
    shadow-xl dark:shadow-2xl transition-shadow duration-300
    ${fullWidth ? "w-full" : ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <ProjectsCardContent project={project} />
    </motion.div>
  );
}

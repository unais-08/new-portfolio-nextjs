"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectsGrid({ projects }) {
  // Animation variants for staggered animation
  // console.log("Projects in ProjectsGrid:", projects);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects?.length > 0 ? (
        projects?.map((project) => (
          <motion.div key={project._id || project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-secondary-600 dark:text-secondary-400">
            No projects found with the selected filter.
          </p>
        </div>
      )}
    </motion.div>
  );
}

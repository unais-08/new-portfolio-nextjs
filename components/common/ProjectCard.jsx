"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, fullWidth = false }) {
  return (
    <motion.div
      className={`card group h-full ${fullWidth ? "w-full" : ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/50 dark:bg-secondary-900/70 z-10 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-secondary-800/90 rounded-full text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
              aria-label={`Visit ${project.title} demo`}
            >
              <FiExternalLink size={20} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-secondary-800/90 rounded-full text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>

        <Image
          src={project.image || "/api/placeholder/600/400"}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

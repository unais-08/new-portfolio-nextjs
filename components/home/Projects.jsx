"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Swipe through to explore, or
            visit the projects page to see more.
          </p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} />

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn btn-primary inline-flex items-center"
          >
            View All Projects
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

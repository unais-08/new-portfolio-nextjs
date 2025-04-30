"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

export async function getProjects() {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();
  console.log(data);
  if (!res.ok) throw new Errorr("Failed to fetch projects");
  return data;
}
export default function Projects() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        setFeaturedProjects(projects);
        console.log(projects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <section
      id="projects"
      className="section py-16 sm:py-24 bg-secondary-50 dark:bg-secondary-900"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Swipe through to explore, or
            visit the projects page to see more.
          </p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} />
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-sm sm:text-base text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 space-x-2"
          >
            <span>View All Projects</span>
            <FiArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}

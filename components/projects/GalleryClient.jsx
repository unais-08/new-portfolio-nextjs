"use client";

import { useEffect, useState } from "react";
import ProjectsGrid from "./ProjectsGrid";

const unique = (arr) => [...new Set(arr.flat())];

export default function GalleryClient({ allProjects }) {
  const [search, setSearch] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    const filtered = allProjects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesTech = techFilter
        ? project.techStack.includes(techFilter)
        : true;
      const matchesCategory = categoryFilter
        ? project.category === categoryFilter
        : true;
      return matchesSearch && matchesTech && matchesCategory;
    });
    setFilteredProjects(filtered);
  }, [search, techFilter, categoryFilter, allProjects]);

  const techStacks = unique(allProjects.map((p) => p.techStack));
  const categories = unique(allProjects.map((p) => p.category));

  return (
    <section className="lg:min-h-screen flex flex-col lg:flex-row gap-6 px-4 py-8 dark:bg-black bg-white transition-colors duration-300">
      {/* Sidebar filter for large screens */}
      <aside className="w-full lg:w-64 border rounded-lg p-4 h-fit dark:border-gray-700 dark:bg-gray-900 bg-white lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start mt-8">
        {/* Hidden on mobile */}
        <div className="hidden lg:block">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">
            Filter Projects
          </h2>

          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <div className="mb-4">
            <label className="block mb-1 font-medium dark:text-white">
              Tech Stack
            </label>
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full px-2 py-1 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              <option value="">All</option>
              {techStacks.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category filter - visible on all screen sizes */}
        <div>
          <label className="block mb-1 font-medium dark:text-white">
            Category
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-2 py-1 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Projects grid with responsive layout */}
      <div className="w-full lg:w-3/4">
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
}

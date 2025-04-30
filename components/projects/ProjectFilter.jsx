"use client";

import { motion } from "framer-motion";

export default function ProjectFilter({ activeFilter, onFilterChange }) {
  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "api", label: "API" },
    { id: "web", label: "Web" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter.id
              ? "bg-primary-600 text-white dark:bg-primary-500"
              : "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-300 dark:hover:bg-secondary-600"
          }`}
          onClick={() => onFilterChange(filter.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}

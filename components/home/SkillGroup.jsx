"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SkillGroup({ title, skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="h-full flex flex-col rounded-2xl bg-white dark:bg-secondary-800 shadow-xl dark:shadow-none p-6 transition-all duration-300 font-sans">
      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-5 border-b border-secondary-200 dark:border-secondary-700 pb-2">
        {title}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-5">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors cursor-pointer"
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full mb-2"
              style={{ backgroundColor: `${skill.color}20` }}
            >
              {skill.icon ? (
                <skill.icon size={24} color={skill.color} />
              ) : (
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: skill.color }}
                ></div>
              )}
            </div>
            <span
              className={`text-sm font-medium transition-colors text-center leading-tight
                ${
                  hoveredSkill === skill.name
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-secondary-700 dark:text-secondary-300"
                }`}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SkillGroup({ title, skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors cursor-pointer"
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
              className={`text-sm font-medium ${
                hoveredSkill === skill.name
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-secondary-700 dark:text-secondary-300"
              } transition-colors`}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

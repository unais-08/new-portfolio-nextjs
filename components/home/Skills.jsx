"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-secondary-50 dark:bg-secondary-900 py-12 sm:py-20 font-sans"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
            A curated set of tools and technologies I use to build high-quality,
            scalable, and interactive web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SkillGroup title={group.title} skills={group.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

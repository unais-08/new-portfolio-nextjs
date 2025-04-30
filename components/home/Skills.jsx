"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-secondary-50 dark:bg-secondary-800/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Here are the technologies and skills I've cultivated throughout my
            journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillGroup title={group.title} skills={group.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

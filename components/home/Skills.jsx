"use client";
import { skillGroups } from "@/data/skills";
import SkillGroup from "@/components/home/SkillGroup";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-secondary-50 dark:bg-secondary-900 py-12 sm:py-20 font-sans "
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 tracking-wider">
            My Skills
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
            A curated set of tools and technologies I use to build high-quality,
            scalable, and interactive web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="h-full">
              <SkillGroup title={group.title} skills={group.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

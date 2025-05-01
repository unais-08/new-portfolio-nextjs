"use client ";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function HeroSectionLinks() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/projects"
        className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-sm sm:text-base text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 space-x-2 tracking-wider"
      >
        View Projects
        <FiArrowRight className="text-lg" />
      </Link>

      <Link
        href="/#skills"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl hover:bg-[var(--color-primary-50)] dark:hover:bg-[var(--color-primary-900)]/30 transition duration-300 tracking-wide"
      >
        Explore Skills
      </Link>
    </div>
  );
}

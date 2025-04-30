"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] sm:min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] dark:bg-[var(--foreground)] dark:text-[var(--background)] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-800)] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-secondary-100)] dark:bg-[var(--color-secondary-700)]/40 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container-custom pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] dark:text-[var(--background)] leading-tight">
              Shaikh Unais
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-[var(--color-primary-600)] dark:text-[var(--color-primary-300)] font-medium">
              Full Stack Developer
            </p>

            <p className="mt-6 text-lg text-[var(--color-secondary-600)] dark:text-[var(--color-secondary-300)] max-w-2xl mx-auto">
              I design and build modern web applications with a focus on user
              experience, performance, and scalability. Passionate about solving
              complex problems with elegant solutions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-sm sm:text-base text-white font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.03] active:scale-95 transition-all duration-300 space-x-2"
              >
                View Projects
                <FiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/#skills"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-xl hover:bg-[var(--color-primary-50)] dark:hover:bg-[var(--color-primary-900)]/30 transition duration-300"
              >
                Explore Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

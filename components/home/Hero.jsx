import { HeroSectionLinks } from "@/components/common/HeroSectionLinks";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] sm:min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] dark:bg-[var(--foreground)] dark:text-[var(--background)] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-800)] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-secondary-100)] dark:bg-[var(--color-secondary-700)]/40 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container-custom pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] dark:text-[var(--background)] leading-tight tracking-wide">
              Shaikh Unais
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-[var(--color-primary-600)] dark:text-[var(--color-primary-300)] font-medium tracking-wider">
              Full Stack Developer
            </p>

            <p className="mt-6 text-lg text-[var(--color-secondary-600)] dark:text-[var(--color-secondary-300)] max-w-2xl mx-auto tracking-wide">
              I design and build modern web applications with a focus on user
              experience, performance, and scalability. Passionate about solving
              complex problems with elegant solutions.
            </p>

            {/* Hero Section Links */}
            <HeroSectionLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

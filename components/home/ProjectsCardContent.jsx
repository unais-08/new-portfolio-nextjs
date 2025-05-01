import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectsCardContent({ project }) {
  return (
    <>
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={project.images}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />

        {/* Gradient overlay for better UX */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10" />

        {/* Hover Icons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-secondary-800/90 rounded-full text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
              aria-label={`Visit ${project.title} demo`}
            >
              <FiExternalLink size={20} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-secondary-800/90 rounded-full text-primary-600 dark:text-primary-400 hover:scale-110 transition-transform"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2 tracking-wider">
          {project.name}
        </h3>

        <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(project.techStack || []).slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 4 && (
            <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-xs rounded-md">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

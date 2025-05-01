import ProjectCarousel from "@/components/home/ProjectCarousel";
import { ViewGalleryLinks } from "@/components/common/ViewGalleryLinks";

import { jsonToStringify } from "@/utils/jsonTostringify";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const featuredProjects = jsonToStringify(projectsData);

  return (
    <section
      id="projects"
      className="section py-16 sm:py-24 bg-secondary-50 dark:bg-secondary-900"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 ">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Swipe through to explore, or
            visit the projects page to see more.
          </p>
        </div>

        <ProjectCarousel projects={featuredProjects} />
        <ViewGalleryLinks />
      </div>
    </section>
  );
}

import ProjectCard from "@/components/common/ProjectCard";
import { getProjects } from "@/components/home/Projects";

export default async function ProjectGallery() {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();
  return (
    <>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}

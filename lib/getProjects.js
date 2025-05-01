import connectDB from "@/db/connectDB";
import Project from "@/model/Project";
import { sanitizeData } from "@/utils/sanitizeData";

export default async function getProject() {
  await connectDB();

  const projects = await Project.find({}).sort({ createdAt: -1 });

  if (!projects || projects.length === 0) {
    throw new Error("No projects found");
  }
  const sanitizedProjects = sanitizeData(projects);
  // console.log("Projects fetched from DB:", sanitizedProjects);
  return sanitizedProjects;
}

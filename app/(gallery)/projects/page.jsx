import GalleryClient from "@/components/projects/GalleryClient";
import getProject from "@/lib/getProjects";

export default async function ProjectGallery() {
  const allProjects = await getProject(); // Fetched from DB
  return <GalleryClient allProjects={allProjects} />;
}

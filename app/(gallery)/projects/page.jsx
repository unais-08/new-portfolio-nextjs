// "use client";
import GalleryClient from "@/components/projects/GalleryClient";
import getProject from "@/lib/getProjects";
// import { set } from "mongoose";
// import { useEffect, useState } from "react";
export const dynamic = "force-dynamic"; // forces Next.js to SSR

export default async function ProjectGallery() {
  // const [allProjects, setAllProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("/api/projects");
  //       const data = await res.json();
  //       setFilteredProjects(data);
  //       setLoading(false);
  //     } catch (error) {
  //       throw new Error("Error fetching projects");
  //       // setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const allProjects = await getProject(); // Fetched from DB

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }
  return <GalleryClient allProjects={allProjects} />;
}

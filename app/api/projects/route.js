// app/api/projects/route.js

import connectDB from "@/db/connectDB";
import Project from "@/model/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({});
   
    return Response.json(projects);
  } catch (error) {
    return new Response("Error fetching projects", { status: 500 });
  }
}

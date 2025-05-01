import connectDB from "@/db/connectDB";
import Project from "@/model/Project";
import { errorResponse, successResponse } from "@/utils/response";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({});
    return successResponse(projects);
  } catch (error) {
    return errorResponse("Failed to fetch projects");
  }
}

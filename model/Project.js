import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    githubUrl: String,
    liveUrl: String,
    techStack: [String],
    images: String,
    category: String,
    featured: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);

"use client";
import { useState } from "react";

const techStacks = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];
const categories = ["Frontend", "Fullstack", "Backend"];

export default function SidebarFilter() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="lg:w-64 w-full border rounded-lg p-4 h-fit sticky top-4">
      <h2 className="text-lg font-semibold mb-2">Filter Projects</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 mb-3 border rounded"
      />

      <div className="mb-4">
        <label className="block mb-1 font-medium">Tech Stack</label>
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="">All</option>
          {techStacks.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

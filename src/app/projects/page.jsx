"use client";

import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (error) return <div className="text-center py-20 text-xl text-red-500">Error: {error}</div>;

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="ml-20 py-20 bg-gray-100">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Background Overlay with Opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 bg-white bg-opacity-75 p-4 rounded-md">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-6">{project.description}</p>
                <div className="flex justify-center">
                  <Link href={`/projects/${encodeURIComponent(project.title)}`}>
                    <span className="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-600 transition-colors cursor-pointer">
                      View Project
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

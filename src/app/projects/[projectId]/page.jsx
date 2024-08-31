"use client";

import { useEffect, useState } from 'react';

const ProjectDetails = ({ params }) => {
  const { projectId } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/projects.json`); // Adjust the URL if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        const foundProject = projects.find(proj => proj.title === decodeURIComponent(projectId));
        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (error) return <div className="text-center py-20 text-xl text-red-500">Error: {error}</div>;
  if (!project) return <div className="text-center py-20 text-xl">Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">{project.title}</h1>
          <p className="text-xl mb-8">{project.description}</p>
        </div>
      </header>

      {/* Project Details Section */}
      <main className="relative px-6 py-12 container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Detailed Explanation</h2>
          <p className="text-lg mb-8">{project.detailedExplanation}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tech Stacks</h2>
            <ul className="list-disc list-inside pl-6">
              {project.techStacks.map((stack, index) => (
                <li key={index} className="text-lg mb-2">{stack}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
            <div className="flex flex-wrap gap-6">
              {project.screenshots.map((src, index) => (
                <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="w-full max-w-xs h-auto rounded-lg shadow-md" />
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href={project.sourceCodeUrl}
              className="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            {project.deployedUrl && 
            <a
              href={project.deployedUrl}
              className="bg-yellow-500 text-white py-2 px-4 rounded-full font-bold hover:bg-yellow-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed Site
            </a>
          }
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;

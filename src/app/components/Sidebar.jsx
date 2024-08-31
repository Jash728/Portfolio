import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaFileDownload,
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-20 fixed top-0 left-0 h-full bg-gray-800 text-white bg-opacity-50">
        <Link
          href="/"
          title="Home"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaHome className="text-2xl" />
        </Link>
        <Link
          href="/experience"
          title="Experience"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaBriefcase className="text-2xl" />
        </Link>
        <Link
          href="/projects"
          title="My Projects"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaProjectDiagram className="text-2xl" />
        </Link>
        <Link
          href="https://github.com/Jash728"
          title="GitHub"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="/resume.pdf"
          title="Download Resume"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
          download
        >
          <FaFileDownload className="text-2xl" />
        </Link>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-16 bg-gray-800 text-white flex flex-col items-center py-4 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white text-3xl p-2 mb-4 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none"
        >
          <FaTimes />
        </button>
        <Link
          href="/"
          title="Home"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaHome className="text-2xl" />
        </Link>
        <Link
          href="/experience"
          title="Experience"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaBriefcase className="text-2xl" />
        </Link>
        <Link
          href="/projects"
          title="My Projects"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaProjectDiagram className="text-2xl" />
        </Link>
        <Link
          href="https://github.com/Jash728"
          title="GitHub"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="/resume.pdf"
          title="Download Resume"
          className="flex items-center justify-center p-4 rounded-full hover:bg-gray-700 transition-colors mt-4"
          download
        >
          <FaFileDownload className="text-2xl" />
        </Link>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

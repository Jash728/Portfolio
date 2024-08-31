"use client";

import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiNumpy,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />

      {/* Introduction Section */}
      <div className="ml-20 p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 text-white rounded-lg shadow-lg mb-8">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg lg:text-xl text-center max-w-3xl mb-8">
            Hi, I'm Jash Shah, a passionate full-stack developer with a knack
            for crafting elegant and functional solutions. I specialize in
            developing comprehensive web applications and am currently exploring
            the fascinating world of data science. Let's work together to turn
            ideas into reality!
          </p>
        </div>
      </div>

      {/* My Skills Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-800">
          My Skills
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {/* Frontend Skills */}
          <div>
            <FaHtml5 className="text-4xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div>
            <FaCss3Alt className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div>
            <FaJs className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div>
            <FaReact className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">ReactJS</h3>
          </div>
          <div>
            <SiNextdotjs className="text-4xl text-black mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">NextJS</h3>
          </div>
          <div>
            <SiTailwindcss className="text-4xl text-teal-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          </div>
          <div>
            <SiTypescript className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">TypeScript</h3>
          </div>

          {/* Backend Skills */}
          <div>
            <FaNodeJs className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">NodeJS</h3>
          </div>
          <div>
            <SiDjango className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Django</h3>
          </div>
          <div>
            <FaPython className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Python</h3>
          </div>
          <div>
            <SiCplusplus className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">C++</h3>
          </div>
          <div>
            <SiNumpy className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">NumPy</h3>
          </div>

          {/* Tools/Technologies */}
          <div>
            <Image
              src="/images/blockchain.png" // Replace with your Blockchain image path
              alt="Blockchain"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Blockchain</h3>
          </div>
          <div>
            <FaDatabase className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">MySQL</h3>
          </div>
          <div>
            <SiMongodb className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">MongoDB</h3>
          </div>
          <div>
            <AiFillDatabase className="text-4xl text-blue-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">PostgreSQL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

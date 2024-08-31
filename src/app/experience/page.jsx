"use client";

import Sidebar from "../components/Sidebar";

const Experience = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="ml-20 py-20 bg-gray-100">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gray-800">
          My Experience
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:h-full before:border-l-2 before:border-gray-300 before:content-['']">
            <div className="space-y-12">
              {/* Timeline Item 1: Tata Consultancy Services */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 md:pr-8">
                  <div className="bg-yellow-100 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Assistant System Engineer
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tata Consultancy Services • Nov 2023 - Present
                    </p>
                    <p className="mt-2 text-gray-700">
                      Responsibilities: Involved in a project with technologies
                      like React, Node.js, and Python, covering both frontend and
                      backend tasks.
                    </p>
                    <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-4 transform -translate-x-1/2"></span>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2: Arth Infosoft Pvt Ltd */}
              <div className="flex items-center justify-end w-full">
                <div className="w-full md:w-1/2 md:pl-8">
                  <div className="bg-yellow-100 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Full Stack Developer
                    </h3>
                    <p className="text-sm text-gray-600">
                      Arth Infosoft Pvt Ltd • Jan 2023 - Oct 2023 • Remote
                    </p>
                    <p className="mt-2 text-gray-700">
                      Responsibilities: Worked on the MERN stack, involving
                      front-end and back-end development in various projects.
                    </p>
                    <span className="absolute w-4 h-4 bg-blue-500 rounded-full -right-2 top-4 transform translate-x-1/2"></span>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3: DXFactor Solution Pvt Ltd */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 md:pr-8">
                  <div className="bg-yellow-100 p-6 rounded-lg shadow-md relative">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Backend Developer
                    </h3>
                    <p className="text-sm text-gray-600">
                      DXFactor Solution Pvt Ltd • June 2022 - July 2022 • Onsite
                    </p>
                    <p className="mt-2 text-gray-700">
                      Responsibilities: Developed reliable APIs using Django and
                      focused on backend development in various projects.
                    </p>
                    <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-4 transform -translate-x-1/2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

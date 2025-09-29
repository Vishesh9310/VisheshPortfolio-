import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import ScrollToTop from "../components/ScrollToTop";

const FullProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { projectData } = useData();

    const project = projectData.find((p) => p.id === Number(id));
    if (!project) {
        return (
            <div className="pt-20 text-center text-red-500 text-xl font-semibold">
                Project not found
            </div>
        );
    }

    return (
        <div className="pt-24 px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto space-y-8 pb-10">
            {/* Date */}
            <div className="text-right italic">{project.date}</div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                    src={project.img}
                    alt={project.heading}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Heading & Description */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold">
                    {project.heading}
                </h1>
                <h3 className="text-lg sm:text-xl">{project.desc}</h3>
                <p className="leading-relaxed">{project.about}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-4">
                <a
                    href={project.codebtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-3 px-6 rounded-full text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                    View Code
                </a>
                <a
                    href={project.previewbtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-3 px-6 rounded-full text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                    Live Preview
                </a>
            </div>

            <ScrollToTop />
        </div>
    );
};

export default FullProject;
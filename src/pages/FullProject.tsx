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
            <div className="overflow-hidden rounded-xl shadow-lg space-y-10">
                <img
                    src={project.img.src}
                    alt={project.img.alt || "Project Image"}
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                    {Array.isArray(project.imageList) &&
                        project.imageList.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt || "Project image"}
                                className="w-full h-48 object-cover rounded-xl max-w-[250px]"
                            />
                        ))}
                </div>

            </div>

            {/* Heading & Description */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600">
                    {project.heading}
                </h1>
                <h3 className="text-lg sm:text-xl text-purple-500">{project.desc}</h3>
                <div className="leading-relaxed space-y-4 text-left">
                    {Array.isArray(project.about)
                        ? project.about.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))
                        : <p>{project.about}</p>}
                </div>

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
import React from "react";
import { FaStar, FaCodeBranch, FaBug, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Project Logo */}
            <div className="flex justify-center items-center bg-gray-100 p-4 rounded-t-xl">
                <img
                    src={project.logo}
                    alt={project.name}
                    className="h-16 w-16 object-contain"
                />
            </div>

            {/* Project Info */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-gray-600 text-sm mb-3">
                    <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCodeBranch className="text-green-500" /> {project.forks}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaBug className="text-red-500" /> {project.issues}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-2">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        <FaGithub /> Code
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500 transition"
                    >
                        <FaExternalLinkAlt /> Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

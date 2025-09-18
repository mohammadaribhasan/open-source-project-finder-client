import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProjectCard from "../components/ProjectCard";
import ProjectList from "../ProjectsList";

const ExploreProjects = () => {
    const [projects, setProjects] = useState(ProjectList);
    const [filter, setFilter] = useState({ language: "", difficulty: "" });

    useEffect(() => {
        let filtered = ProjectList;

        if (filter.language) {
            filtered = filtered.filter(
                (project) => project.language === filter.language
            );
        }

        if (filter.difficulty) {
            filtered = filtered.filter(
                (project) => project.difficulty === filter.difficulty
            );
        }

        setProjects(filtered);
    }, [filter]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Explore Projects</h2>
                    <div className="mb-4 flex gap-4">
                        <select
                            value={filter.language}
                            onChange={(e) =>
                                setFilter({ ...filter, language: e.target.value })
                            }
                            className="p-2 rounded border"
                        >
                            <option value="">All Languages</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                        </select>

                        <select
                            value={filter.difficulty}
                            onChange={(e) =>
                                setFilter({ ...filter, difficulty: e.target.value })
                            }
                            className="p-2 rounded border"
                        >
                            <option value="">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProjects;

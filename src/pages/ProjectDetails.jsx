import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
                setProject(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProject();
    }, [id]);

    if (!project) return <div className="flex"><Sidebar /><div className="flex-1 p-6">Loading...</div></div>;

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Navbar />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                    <p className="mb-2 text-gray-700">{project.description}</p>
                    <p className="mb-2 text-sm text-gray-500">Language: {project.language}</p>
                    <p className="mb-2 text-sm text-gray-500">Difficulty: {project.difficulty}</p>
                    <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Repository
                    </a>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Skills Required</h3>
                        <ul className="list-disc ml-6">
                            {project.skills?.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProjectCard from "../components/ProjectCard";

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Tons of fake projects
        const fakeBookmarks = Array.from({ length: 20 }).map((_, i) => ({
            _id: `${i + 1}`,
            name: `Project ${i + 1}`,
            description: `This is a professionally structured description for Project ${i + 1}. It showcases features, tech stack, and usage.`,
            stars: Math.floor(Math.random() * 5000) + 100,
            forks: Math.floor(Math.random() * 1000) + 50,
            issues: Math.floor(Math.random() * 50),
            tags: ["React", "Node.js", "TypeScript", "Python"].sort(() => 0.5 - Math.random()).slice(0, 3),
            logo: `https://picsum.photos/seed/project${i + 1}/64/64`,
            url: "https://github.com/fake/project",
            demo: "https://demo.fake/project",
        }));

        setTimeout(() => {
            setBookmarks(fakeBookmarks);
        }, 800);
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">🔖 Bookmarked Projects</h2>

                {bookmarks.length === 0 ? (
                    <p className="text-gray-500 text-lg">Loading your bookmarks...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookmarks.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bookmarks;

import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaExclamationCircle, FaSearch } from "react-icons/fa";

// Fake projects data
const fakeProjects = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `Project ${i + 1}`,
    description: `This is a professional mock project ${i + 1} showcasing modern web development techniques, scalable architecture, and clean code.`,
    stars: Math.floor(Math.random() * 5000),
    forks: Math.floor(Math.random() * 1000),
    issues: Math.floor(Math.random() * 50),
    language: ["JavaScript", "TypeScript", "Python", "React", "Node.js"][Math.floor(Math.random() * 5)],
    tags: ["React", "Node.js", "Python", "TypeScript", "Next.js", "MongoDB", "GraphQL"].sort(() => 0.5 - Math.random()).slice(0, 3),
    url: "https://github.com/fakeuser/fakeproject",
    demo: "https://demo.fakeproject.com",
    updated: `${Math.floor(Math.random() * 30) + 1} days ago`,
}));

const categories = ["All", "Web", "Mobile", "Backend", "Frontend", "AI/ML", "DevOps", "UI/UX"];

const Discover = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setProjects(fakeProjects);
        }, 500);
    }, []);

    const filteredProjects = projects
        .filter(p => activeCategory === "All" || p.tags.includes(activeCategory))
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Top languages count for chart
    const languageCounts = projects.reduce((acc, p) => {
        acc[p.language] = (acc[p.language] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">🔍 Discover Open Source Projects</h1>

            {/* Search */}
            <div className="mb-6 relative max-w-md">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full font-medium border transition ${activeCategory === cat
                            ? "bg-green-500 text-white border-green-500"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition relative border-t-4 border-green-400">
                        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                            <div className="flex items-center gap-2"><FaStar /> {project.stars}</div>
                            <div className="flex items-center gap-2"><FaCodeBranch /> {project.forks}</div>
                            <div className="flex items-center gap-2"><FaExclamationCircle /> {project.issues}</div>
                        </div>

                        <p className="text-gray-400 text-xs mb-4">Updated: {project.updated}</p>

                        <div className="flex gap-3">
                            <a href={project.url} target="_blank" rel="noreferrer" className="text-white bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">Code</a>
                            <a href={project.demo} target="_blank" rel="noreferrer" className="text-green-500 border border-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition">Demo</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top Languages */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">💻 Top Languages</h2>
                <div className="flex gap-4 flex-wrap">
                    {Object.entries(languageCounts).map(([lang, count]) => (
                        <div key={lang} className="bg-white rounded-xl shadow p-4 flex-1 min-w-[120px] hover:shadow-lg transition">
                            <h3 className="font-semibold">{lang}</h3>
                            <p className="text-gray-500 text-sm">{count} projects</p>
                            <div className="h-2 bg-green-200 rounded-full mt-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(count / projects.length) * 100}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Contributors */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">🔥 Top Contributors</h2>
                <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
                            <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt={`Contributor ${i + 1}`} className="w-12 h-12 rounded-full border-2 border-green-500" />
                            <div>
                                <p className="font-medium">Contributor {i + 1}</p>
                                <p className="text-xs text-gray-500">{Math.floor(Math.random() * 100)} contributions</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;

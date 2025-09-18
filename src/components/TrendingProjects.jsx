import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaBug } from "react-icons/fa";

const projects = [
    {
        id: 1,
        name: "React Starter Kit",
        stars: 1200,
        forks: 320,
        issues: 15,
        language: "JavaScript",
        description: "A modern React boilerplate with routing, state management, TailwindCSS, and best practices for scalable apps.",
        tags: ["React", "Tailwind", "Vite", "Redux"],
        url: "https://github.com/react-boilerplate/react-boilerplate",
        demo: "https://reactstarter.dev",
        logo: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    },
    {
        id: 2,
        name: "Awesome ML",
        stars: 900,
        forks: 200,
        issues: 5,
        language: "Python",
        description: "A curated list of awesome Machine Learning frameworks, libraries, datasets, and tutorials for beginners to pros.",
        tags: ["Python", "ML", "AI", "TensorFlow"],
        url: "https://github.com/josephmisiti/awesome-machine-learning",
        demo: "https://awesomeml.dev",
        logo: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
    },
    {
        id: 3,
        name: "Game Engine",
        stars: 750,
        forks: 120,
        issues: 22,
        language: "C++",
        description: "A lightweight C++ game engine for building both 2D and 3D projects with physics, rendering, and modular design.",
        tags: ["C++", "OpenGL", "Physics", "Engine"],
        url: "https://github.com/gamedev/game-engine",
        demo: "https://gameengine.dev",
        logo: "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png",
    },
];

const TrendingProjects = () => {
    return (
        <section
            id="trending"
            className="relative min-h-screen flex flex-col justify-center items-left bg-gradient-to-br from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-white px-6 py-20 overflow-hidden"
        >
            {/* Decorative Background Glow */}
            <motion.div
                className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse-slow z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse-slow z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5 }}
            />

            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-left drop-shadow-lg z-10">
                Trending Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-10 w-full max-w-7xl z-10">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.id}
                        className="relative group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Thumbnail / Logo */}
                        <div className="bg-gray-700 p-6 flex justify-center items-center border-b border-gray-600">
                            <img src={p.logo} alt={p.name} className="h-20 w-20 object-contain" />
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition">
                                {p.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{p.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-200 border border-gray-600"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex justify-between text-sm text-gray-300 mb-4">
                                <span className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" /> {p.stars}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaCodeBranch className="text-green-400" /> {p.forks}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaBug className="text-red-400" /> {p.issues}
                                </span>
                            </div>

                            {/* Buttons */}
                            <div className="mt-auto flex gap-3">
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition shadow hover:shadow-yellow-400/50"
                                >
                                    <FaGithub /> Code
                                </a>
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition shadow hover:shadow-yellow-500/50"
                                >
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            </div>

                            {/* Subtle Glow Overlay */}
                            <span className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-5 blur-xl pointer-events-none"></span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TrendingProjects;

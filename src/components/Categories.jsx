import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaRobot, FaMobileAlt, FaGamepad, FaDatabase } from "react-icons/fa";

const categories = [
    {
        name: "Web Development",
        icon: <FaGlobe className="text-5xl text-blue-400 animate-bounce-slow" />,
        description: "Build websites, web apps, and full-stack platforms with modern tools.",
        projects: 120,
    },
    {
        name: "AI / Machine Learning",
        icon: <FaRobot className="text-5xl text-green-400 animate-bounce-slow" />,
        description: "Explore AI models, neural networks, and deep learning innovations.",
        projects: 80,
    },
    {
        name: "Mobile Apps",
        icon: <FaMobileAlt className="text-5xl text-purple-400 animate-bounce-slow" />,
        description: "Develop cross-platform mobile apps for Android and iOS.",
        projects: 95,
    },
    {
        name: "Game Development",
        icon: <FaGamepad className="text-5xl text-red-400 animate-bounce-slow" />,
        description: "Create 2D and 3D games with engines like Unity & Unreal.",
        projects: 60,
    },
    {
        name: "Data Science",
        icon: <FaDatabase className="text-5xl text-yellow-400 animate-bounce-slow" />,
        description: "Analyze big data, visualization, and statistical modeling.",
        projects: 110,
    },
];

const Categories = () => {
    return (
        <section
            id="categories"
            className="relative py-24 bg-gradient-to-tl from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-white px-6 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute w-72 h-72 bg-purple-500 rounded-full mix-blend-screen opacity-20 -top-20 -left-20 animate-pulse-slow"></div>
                <div className="absolute w-64 h-64 bg-blue-400 rounded-full mix-blend-screen opacity-15 bottom-10 right-10 animate-pulse-slow"></div>
            </div>

            {/* Constrained container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title aligned right */}
                <h2 className="text-4xl md:text-5xl text-indigo-300 font-extrabold mb-16 text-right">
                    Explore Categories
                </h2>

                {/* Centered cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-md shadow-xl border border-gray-700 hover:border-yellow-400 transition-transform duration-500 hover:scale-105 cursor-pointer flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon with glow */}
                            <div className="mb-5 relative">
                                {cat.icon}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-30 blur-2xl mix-blend-screen transition-all duration-500 group-hover:opacity-60"></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-5 text-sm">{cat.description}</p>

                            {/* Stats */}
                            <span className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-pink-500 text-black shadow-lg text-sm">
                                {cat.projects}+ Projects
                            </span>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;

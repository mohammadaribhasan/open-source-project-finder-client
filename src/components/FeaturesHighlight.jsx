import React from "react";
import { motion } from "framer-motion";
import {
    FaHandsHelping,
    FaFilter,
    FaGithub,
    FaChartLine,
    FaUsers,
    FaRobot,
} from "react-icons/fa";

const features = [
    {
        title: "Beginner-Friendly",
        desc: "Get started easily with projects labeled 'Good First Issue' and clear documentation.",
        icon: <FaHandsHelping className="text-5xl text-yellow-400 drop-shadow-lg" />,
        detail: "Perfect for newcomers who want to contribute without feeling overwhelmed.",
    },
    {
        title: "Smart Filtering",
        desc: "Filter projects by language, difficulty, tags, and community activity.",
        icon: <FaFilter className="text-5xl text-blue-400 drop-shadow-lg" />,
        detail: "Save time by instantly narrowing down projects that fit your skill level.",
    },
    {
        title: "GitHub Integration",
        desc: "Seamlessly connect with GitHub to fork, star, and contribute in one click.",
        icon: <FaGithub className="text-5xl text-gray-300 drop-shadow-lg" />,
        detail: "No need to leave the platform – everything syncs directly with GitHub.",
    },
    {
        title: "Project Insights",
        desc: "See stars, forks, last activity, and contributor stats before joining.",
        icon: <FaChartLine className="text-5xl text-green-400 drop-shadow-lg" />,
        detail: "Helps you choose active projects that match your growth goals.",
    },
    {
        title: "Collaborative Community",
        desc: "Join discussions, find mentors, and connect with developers worldwide.",
        icon: <FaUsers className="text-5xl text-pink-400 drop-shadow-lg" />,
        detail: "Grow your network while building real-world skills.",
    },
    {
        title: "Personalized Recommendations",
        desc: "Get AI-powered project suggestions based on your skills and past contributions.",
        icon: <FaRobot className="text-5xl text-purple-400 drop-shadow-lg" />,
        detail: "Never waste time searching — always find the best fit for you.",
    },
];

const FeaturesHighlight = () => {
    return (
        <section
            id="features"
            className="relative min-h-screen flex flex-col py-20 items-center bg-gradient-to-bl from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-white px-6 overflow-hidden"
        >
            {/* Decorative Background Glow */}
            <motion.div
                className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5 }}
            />

            {/* Section Heading (only this on the right) */}
            <div className="w-full max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-left drop-shadow-lg">
                    Why Use This Platform?
                </h2>
            </div>

            {/* Features Grid (centered) */}
            <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl justify-items-center">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center text-center h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Icon */}
                        <div className="mb-5 bg-gray-900 p-4 rounded-full shadow-lg">{f.icon}</div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-3">{f.title}</h3>

                        {/* Short Description */}
                        <p className="text-gray-300 mb-4 text-sm flex-grow">{f.desc}</p>

                        {/* Extra Detail */}
                        <p className="text-gray-400 text-xs italic">{f.detail}</p>

                        {/* Subtle Glow Animation */}
                        <span className="absolute top-0 left-0 w-full h-full rounded-3xl bg-white opacity-5 blur-xl animate-pulse-slow pointer-events-none"></span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesHighlight;

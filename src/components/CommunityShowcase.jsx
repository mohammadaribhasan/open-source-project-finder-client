import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";

const members = [
    {
        name: "Alice Johnson",
        contribution: "Contributed 10+ Pull Requests",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=1",
        highlights: ["Improved React UI", "Fixed major bugs", "Docs Enhancement"],
    },
    {
        name: "Charlie Kim",
        contribution: "50+ Code Reviews",
        role: "Backend Specialist",
        avatar: "https://i.pravatar.cc/150?img=3",
        highlights: ["Database scaling", "CI/CD pipelines", "Security patches"],
    },
    {
        name: "Diana Smith",
        contribution: "100+ GitHub Stars",
        role: "Open Source Evangelist",
        avatar: "https://i.pravatar.cc/150?img=4",
        highlights: ["Community building", "Workshops", "Docs writing"],
    },
];

const CommunityShowcase = () => {
    return (
        <section
            id="community"
            className="relative flex flex-col items-center bg-gradient-to-tr from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-white px-6 py-24 overflow-hidden"
        >
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen opacity-15 animate-pulse-slow"></div>

            {/* Title aligned to right */}
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-16 text-indigo-300 text-right w-full max-w-6xl"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Community Highlights
            </motion.h2>

            {/* Members Grid (centered & uniform) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl justify-items-center relative z-10">
                {members.map((m, i) => (
                    <motion.div
                        key={i}
                        className="relative group p-8 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md shadow-xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 hover:scale-105 flex flex-col items-center text-center min-h-[420px] w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Avatar with glowing ring */}
                        <div className="relative mb-4">
                            <img
                                src={m.avatar}
                                alt={m.name}
                                className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg z-10 relative"
                            />
                            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-2xl scale-90 group-hover:scale-105 transition-transform duration-500"></div>
                        </div>

                        {/* Name & Role */}
                        <h3 className="text-2xl font-bold">{m.name}</h3>
                        <p className="text-yellow-300 text-sm">{m.role}</p>

                        {/* Contribution */}
                        <p className="mt-2 text-gray-400 italic">{m.contribution}</p>

                        {/* Highlights */}
                        <ul className="mt-4 text-gray-300 text-sm space-y-2 flex-grow">
                            {m.highlights.map((h, j) => (
                                <li key={j} className="flex items-center justify-center gap-2">
                                    <FaCodeBranch className="text-green-400" /> {h}
                                </li>
                            ))}
                        </ul>

                        {/* Stats */}
                        <div className="flex gap-6 mt-6 text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                                <FaGithub /> GitHub
                            </span>
                            <span className="flex items-center gap-1">
                                <FaStar className="text-yellow-400" /> Stars
                            </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CommunityShowcase;

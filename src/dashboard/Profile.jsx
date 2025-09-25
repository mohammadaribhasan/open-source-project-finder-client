import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import ProjectCard from "../components/ProjectCard";

const Profile = () => {
    const [user, setUser] = useState(null);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("✅ Logged out");
            // Optional: redirect
            // navigate("/");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    useEffect(() => {
        // Fake user data
        const fakeUser = {
            id: 1,
            name: "Arib Hossain",
            email: "arib.dev@example.com",
            bio: "💻 Full-stack web developer passionate about scalable applications...",
            joinDate: "Joined Jan 2024",
            profilePic: "https://i.pravatar.cc/150?img=12",
            social: {
                github: "https://github.com/arib-dev",
                linkedin: "https://linkedin.com/in/arib-dev",
                twitter: "https://twitter.com/arib_dev",
                portfolio: "https://arib.dev",
            },
            stats: {
                projects: 85,
                contributions: 1420,
                followers: 510,
                following: 180,
            },
            badges: ["🏆 Open Source Contributor", "🐛 Bug Hunter", "⭐ Top Reviewer"],
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Node.js", level: 80 },
            ],
            projects: Array.from({ length: 6 }).map((_, i) => ({
                id: i + 1,
                name: `Project ${i + 1}`,
                description: `Demo project ${i + 1}`,
                url: "#",
                demo: "#",
                tags: ["React", "Node.js"],
            })),
        };

        setTimeout(() => setUser(fakeUser), 500);
    }, []);

    if (!user) {
        return (
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6 text-neon-cyan">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="container p-6">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-6">
                    <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-neon shadow-neon"
                    />
                    <div>
                        <h2 className="text-3xl font-bold">{user.name}</h2>
                        <p className="text-gray-400">{user.joinDate}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Bio */}
                <p className="text-neon-cyan text-lg mb-4">{user.bio}</p>

                {/* Social */}
                <div className="flex gap-4 mb-6">
                    {Object.entries(user.social).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neon-cyan hover:text-neon-pink"
                        >
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {Object.entries(user.stats).map(([key, value]) => (
                        <div
                            key={key}
                            className="bg-neon-gradient text-white p-4 rounded-lg text-center"
                        >
                            <h4 className="text-2xl font-bold">{value}</h4>
                            <p className="text-sm capitalize">{key}</p>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">Skills</h3>
                    <div className="space-y-2">
                        {user.skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-neon-cyan">{skill.name}</span>
                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div
                                        className="bg-neon-gradient h-2 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {user.projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

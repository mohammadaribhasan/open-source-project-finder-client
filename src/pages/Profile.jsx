import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Pie, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fakeUser = {
            id: 1,
            name: "Arib Hossain",
            email: "arib.dev@example.com",
            bio: "💻 Full-stack web developer passionate about scalable applications, mentoring, open source, and innovative projects. Always exploring modern tools and frameworks.",
            joinDate: "Joined Jan 2024",
            profilePic: "https://i.pravatar.cc/150?img=12",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "GraphQL", level: 70 },
                { name: "Docker", level: 65 },
                { name: "Kubernetes", level: 60 },
                { name: "TailwindCSS", level: 95 },
            ],
            badges: [
                "🏆 Open Source Contributor",
                "🐛 Bug Hunter",
                "⭐ Top Reviewer",
                "🚀 Hackathon Winner",
                "📖 Documentation Hero",
                "⚡ Speed Coder",
                "🤝 Community Helper",
                "🎨 UI/UX Designer",
            ],
            stats: {
                projects: 85,
                contributions: 1420,
                followers: 510,
                following: 180,
                pullRequests: 320,
                issuesReported: 75,
                commits: 4521,
                starsReceived: 3900,
            },
            social: {
                github: "https://github.com/arib-dev",
                linkedin: "https://linkedin.com/in/arib-dev",
                twitter: "https://twitter.com/arib_dev",
                portfolio: "https://arib.dev",
            },
            experience: [
                { role: "Senior Full-Stack Developer", company: "TechCorp", years: "2023-Present" },
                { role: "Frontend Developer", company: "Webify", years: "2021-2023" },
                { role: "Open Source Contributor", company: "Freelance", years: "2019-Present" },
                { role: "Software Engineer Intern", company: "InnovateX", years: "2020" },
            ],
            projects: Array.from({ length: 12 }).map((_, i) => ({
                id: i + 1,
                name: `Project ${i + 1}`,
                description: `This is a professional fake project number ${i + 1}, demonstrating modern web technologies and scalable architecture.`,
                stars: Math.floor(Math.random() * 5000),
                forks: Math.floor(Math.random() * 1200),
                tags: ["React", "Node.js", "Python", "TypeScript"]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3),
                url: "https://github.com/arib-dev/fakeproject",
                demo: "https://demo.fakeproject.com",
            })),
            pieData: {
                labels: ["React", "Node.js", "Python", "Other"],
                datasets: [
                    {
                        label: "Skill Usage",
                        data: [40, 25, 20, 15],
                        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
                    },
                ],
            },
            contributionsOverTime: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Contributions",
                        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 400)),
                        fill: true,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "#3B82F6",
                    },
                ],
            },
            activity: Array.from({ length: 8 }).map((_, i) => ({
                date: `2025-0${i + 1}-12`,
                action: ["Opened PR", "Created Issue", "Commented", "Merged PR"][i % 4],
                project: `Project ${i + 1}`,
            })),
        };

        setTimeout(() => setUser(fakeUser), 800);
    }, []);

    if (!user)
        return (
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">Loading...</div>
            </div>
        );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8 overflow-y-auto">
                <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-6 mb-6">
                        <img src={user.profilePic} alt={user.name} className="w-24 h-24 rounded-full border-4 border-green-400 shadow-md" />
                        <div>
                            <h2 className="text-3xl font-bold">{user.name}</h2>
                            <p className="text-gray-600">{user.joinDate}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
                        {Object.entries(user.stats).map(([key, value]) => (
                            <div
                                key={key}
                                className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-xl text-center shadow hover:scale-105 transition-transform"
                            >
                                <h4 className="text-2xl font-bold">{value}</h4>
                                <p className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                            </div>
                        ))}
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">📊 Skills Distribution</h3>
                            <Pie data={user.pieData} />
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">📈 Contributions Over Time</h3>
                            <Line data={user.contributionsOverTime} />
                        </div>
                    </div>

                    {/* Skills Bars */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2">🛠 Skills Proficiency</h3>
                        <div className="space-y-2">
                            {user.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">{skill.name}</span>
                                        <span className="text-sm text-gray-600">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Badges */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">🏅 Achievements</h3>
                        <div className="flex gap-2 flex-wrap">
                            {user.badges.map((badge, idx) => (
                                <span
                                    key={idx}
                                    className="bg-yellow-300 px-3 py-1 rounded-lg text-sm font-medium shadow hover:scale-105 transition-transform"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">📝 Recent Activity</h3>
                        <ul className="space-y-1">
                            {user.activity.map((act, idx) => (
                                <li key={idx} className="text-gray-700">
                                    <span className="font-medium">{act.date}</span> - {act.action} in{" "}
                                    <span className="text-blue-600">{act.project}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h3 className="font-semibold text-lg mb-2">📂 Projects</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {user.projects.map((project) => (
                                <div key={project.id} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                                    <h4 className="font-semibold">{project.name}</h4>
                                    <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap mb-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-green-200 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 text-sm hover:underline"
                                        >
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-yellow-600 text-sm hover:underline"
                                        >
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;

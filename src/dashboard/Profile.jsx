import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
} from "chart.js";
import { Pie, Line, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
);

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fakeUser = {
            id: 1,
            name: "Arib Hossain",
            email: "arib.dev@example.com",
            bio: "💻 Full-stack web developer passionate about scalable applications, mentoring, open source, and innovative projects. Exploring the cosmos of code with modern tools and frameworks.",
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
                { name: "TypeScript", level: 88 },
                { name: "Python", level: 82 },
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
                "🔒 Security Advocate",
                "🌌 Code Astronaut",
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
                codeReviews: 250,
                repositories: 42,
            },
            social: {
                github: "https://github.com/arib-dev",
                linkedin: "https://linkedin.com/in/arib-dev",
                twitter: "https://twitter.com/arib_dev",
                portfolio: "https://arib.dev",
            },
            experience: [
                { role: "Senior Full-Stack Developer", company: "TechCorp", years: "2023-Present", description: "Leading development of scalable web applications using React, Node.js, and AWS." },
                { role: "Frontend Developer", company: "Webify", years: "2021-2023", description: "Built responsive UIs with Next.js and TailwindCSS." },
                { role: "Open Source Contributor", company: "Freelance", years: "2019-Present", description: "Contributed to major OSS projects like React and Node.js." },
                { role: "Software Engineer Intern", company: "InnovateX", years: "2020", description: "Developed internal tools with Python and Django." },
            ],
            education: [
                { degree: "M.S. in Computer Science", institution: "Cosmic University", years: "2021-2023", gpa: "3.9/4.0" },
                { degree: "B.S. in Software Engineering", institution: "Tech Institute", years: "2017-2021", gpa: "3.8/4.0" },
            ],
            certifications: [
                { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
                { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2022" },
                { name: "React Professional Certification", issuer: "Frontend Masters", year: "2021" },
            ],
            projects: Array.from({ length: 12 }).map((_, i) => ({
                id: i + 1,
                name: `Project ${i + 1}`,
                description: `A professional project showcasing modern web technologies and scalable architecture. Focus: ${["AI-driven dashboard", "Real-time chat", "E-commerce platform", "Data visualization tool"][i % 4]}.`,
                stars: Math.floor(Math.random() * 5000),
                forks: Math.floor(Math.random() * 1200),
                tags: ["React", "Node.js", "Python", "TypeScript", "GraphQL", "Docker"].sort(() => 0.5 - Math.random()).slice(0, 3),
                url: "https://github.com/arib-dev/fakeproject",
                demo: "https://demo.fakeproject.com",
            })),
            activity: Array.from({ length: 10 }).map((_, i) => ({
                date: `2025-0${(i % 9) + 1}-12`,
                action: ["Opened PR", "Created Issue", "Commented", "Merged PR", "Pushed Commit"][i % 5],
                project: `Project ${i % 4 + 1}`,
                details: `Action on ${["feature branch", "bug fix", "code review", "new API endpoint", "UI enhancement"][i % 5]}`,
            })),
            pieData: {
                labels: ["React", "Node.js", "Python", "Other"],
                datasets: [
                    {
                        label: "Skill Usage",
                        data: [40, 25, 20, 15],
                        backgroundColor: ["#ff0066", "#00ffcc", "#4b0082", "#ffcc00"],
                        borderColor: ["#ff0066", "#00ffcc", "#4b0082", "#ffcc00"],
                        borderWidth: 1,
                    },
                ],
            },
            techStackPieData: {
                labels: ["Frontend", "Backend", "DevOps", "Database"],
                datasets: [
                    {
                        label: "Tech Stack Popularity",
                        data: [35, 30, 20, 15],
                        backgroundColor: ["#ff0066", "#00ffcc", "#4b0082", "#ffcc00"],
                        borderColor: ["#ff0066", "#00ffcc", "#4b0082", "#ffcc00"],
                        borderWidth: 1,
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
                        backgroundColor: "rgba(0, 255, 204, 0.2)",
                        borderColor: "#00ffcc",
                    },
                ],
            },
            repoContributions: {
                labels: ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"],
                datasets: [
                    {
                        label: "Commits by Repository",
                        data: [1200, 900, 600, 400, 200],
                        backgroundColor: "#ff0066",
                        borderColor: "#ff0066",
                        borderWidth: 1,
                    },
                ],
            },
            activityHeatmap: Array.from({ length: 52 }).map((_, i) => ({
                week: i + 1,
                contributions: Math.floor(Math.random() * 20),
            })),
        };
        setTimeout(() => setUser(fakeUser), 800);

        // Canvas animation for universe and code rain
        const canvas = document.createElement("canvas");
        canvas.id = "universeCanvas";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = Array(200).fill().map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
        }));

        const chars = "01{}();=<>";
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0);

        const draw = () => {
            ctx.fillStyle = "rgba(10, 10, 20, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffffff";
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });

            ctx.fillStyle = "#00ffcc";
            ctx.font = `${fontSize}px monospace`;
            drops.forEach((y, i) => {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, y * fontSize);
                if (y * fontSize > canvas.height && Math.random() > 0.97) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 50);
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
            document.body.removeChild(canvas);
        };
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
            <style>
                {`
          body {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #0a0a14 0%, #1c2526 100%);
            font-family: 'Courier New', monospace;
            color: #e0e0e0;
            overflow-x: hidden;
          }

          #universeCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.7;
          }

          .container {
            flex: 1;
            min-height: 100vh;
            padding: 2rem;
            overflow-y: auto;
            backdrop-filter: blur(10px);
            background: rgba(20, 20, 40, 0.5);
          }

          .section {
            background: rgba(30, 30, 50, 0.8);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
            margin-bottom: 2rem;
            border: 1px solid #00ffcc;
          }

          .glitch {
            font-size: 3rem;
            font-weight: bold;
            color: #ff0066;
            text-shadow: 0 0 10px rgba(255, 0, 102, 0.8);
            position: relative;
            animation: glitch 0.8s linear infinite;
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .glitch::before {
            color: #00ffcc;
            animation: glitch-top 1s linear infinite;
            clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          }

          .glitch::after {
            color: #4b0082;
            animation: glitch-bottom 1.2s linear infinite;
            clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          }

          @keyframes glitch {
            2%, 64% { transform: translate(3px, 0) skew(2deg); }
            4%, 60% { transform: translate(-3px, 0) skew(-2deg); }
            62% { transform: translate(0, 0) skew(6deg); }
          }

          @keyframes glitch-top {
            2%, 64% { transform: translate(3px, -3px); }
            4%, 60% { transform: translate(-3px, 3px); }
            62% { transform: translate(0, 0) skew(6deg); }
          }

          @keyframes glitch-bottom {
            2%, 64% { transform: translate(-3px, 0); }
            4%, 60% { transform: translate(3px, 0); }
            62% { transform: translate(0, 0) skew(-6deg); }
          }

          .text-neon-cyan { color: #00ffcc; text-shadow: 0 0 10px rgba(0, 255, 204, 0.5); }
          .text-neon-pink { color: #ff0066; text-shadow: 0 0 10px rgba(255, 0, 102, 0.5); }
          .bg-neon-gradient { background: linear-gradient(to right, #ff0066, #00ffcc); }
          .border-neon { border: 1px solid #00ffcc; }
          .shadow-neon { box-shadow: 0 0 15px rgba(0, 255, 204, 0.4); }
          .hover-scale { transition: transform 0.3s; }
          .hover-scale:hover { transform: scale(1.05); }
          .grid { display: grid; gap: 1rem; }
          .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
          .rounded-lg { border-radius: 0.5rem; }
          .p-4 { padding: 1rem; }
          .p-6 { padding: 1.5rem; }
          .text-sm { font-size: 0.875rem; }
          .text-lg { font-size: 1.125rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .font-semibold { font-weight: 600; }
          .font-bold { font-weight: 700; }
          .mb-2 { margin-bottom: 0.5rem; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-6 { margin-bottom: 1.5rem; }
          .space-y-2 > * + * { margin-top: 0.5rem; }
          .space-y-4 > * + * { margin-top: 1rem; }
          .flex { display: flex; }
          .flex-wrap { flex-wrap: wrap; }
          .gap-2 { gap: 0.5rem; }
          .gap-4 { gap: 1rem; }
          .gap-6 { gap: 1.5rem; }
          .items-center { align-items: center; }
          .justify-between { justify-content: space-between; }
          .text-center { text-align: center; }
          .w-full { width: 100%; }
          .max-w-lg { max-width: 32rem; }
          .bg-gray-900 { background: rgba(30, 30, 50, 0.9); }
          .bg-gray-800 { background: rgba(40, 40, 60, 0.8); }
          .text-gray-400 { color: #b0b0b0; }
          .text-gray-600 { color: #808080; }

          .heatmap {
            display: grid;
            grid-template-columns: repeat(52, 12px);
            gap: 2px;
            background: rgba(20, 20, 40, 0.8);
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .heatmap-cell {
            width: 12px;
            height: 12px;
            border-radius: 2px;
            transition: background 0.3s;
          }

          @media (max-width: 768px) {
            .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
            .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
            .text-3xl { font-size: 1.5rem; }
            .text-2xl { font-size: 1.25rem; }
            .heatmap { grid-template-columns: repeat(26, 12px); }
          }
        `}
            </style>
            <Sidebar />
            <div className="container">
                <div className="section">
                    {/* Header */}
                    <div className="flex items-center gap-6 mb-6">
                        <img src={user.profilePic} alt={user.name} className="w-24 h-24 rounded-full border-4 border-neon shadow-neon" />
                        <div>
                            <h2 className="glitch text-3xl font-bold" data-text={user.name}>{user.name}</h2>
                            <p className="text-gray-400">{user.joinDate}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    <p className="text-neon-cyan text-lg">{user.bio}</p>
                    <div className="flex gap-4 flex-wrap">
                        {Object.entries(user.social).map(([platform, url]) => (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-neon-cyan hover:text-neon-pink text-sm hover-scale"
                            >
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">📊 Stats</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Object.entries(user.stats).map(([key, value]) => (
                            <div
                                key={key}
                                className="bg-neon-gradient text-white p-4 rounded-lg text-center shadow-neon hover-scale"
                            >
                                <h4 className="text-2xl font-bold">{value}</h4>
                                <p className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Charts */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">📈 Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-4 rounded-lg shadow-neon">
                            <h4 className="font-semibold text-lg text-neon-cyan mb-2">Skill Usage</h4>
                            <Pie data={user.pieData} />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg shadow-neon">
                            <h4 className="font-semibold text-lg text-neon-cyan mb-2">Tech Stack Popularity</h4>
                            <Pie data={user.techStackPieData} />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg shadow-neon">
                            <h4 className="font-semibold text-lg text-neon-cyan mb-2">Contributions Over Time</h4>
                            <Line data={user.contributionsOverTime} />
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg shadow-neon">
                            <h4 className="font-semibold text-lg text-neon-cyan mb-2">Commits by Repository</h4>
                            <Bar data={user.repoContributions} />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">🛠 Skills Proficiency</h3>
                    <div className="space-y-2 max-w-lg mx-auto">
                        {user.skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-neon-cyan">{skill.name}</span>
                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div className="bg-neon-gradient h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Badges */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">🏅 Achievements</h3>
                    <div className="flex gap-2 flex-wrap">
                        {user.badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className="bg-neon-gradient px-3 py-1 rounded-lg text-sm font-medium text-white shadow-neon hover-scale"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">🎓 Education</h3>
                    <div className="space-y-4">
                        {user.education.map((edu, idx) => (
                            <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-neon">
                                <h4 className="font-semibold text-neon-cyan">{edu.degree}</h4>
                                <p className="text-gray-400">{edu.institution} ({edu.years})</p>
                                <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">📜 Certifications</h3>
                    <div className="space-y-4">
                        {user.certifications.map((cert, idx) => (
                            <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-neon">
                                <h4 className="font-semibold text-neon-cyan">{cert.name}</h4>
                                <p className="text-gray-400">{cert.issuer} ({cert.year})</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">💼 Experience</h3>
                    <div className="space-y-4">
                        {user.experience.map((exp, idx) => (
                            <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-neon">
                                <h4 className="font-semibold text-neon-cyan">{exp.role}</h4>
                                <p className="text-gray-400">{exp.company} ({exp.years})</p>
                                <p className="text-sm text-gray-600">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">📝 Recent Activity</h3>
                    <ul className="space-y-2">
                        {user.activity.map((act, idx) => (
                            <li key={idx} className="text-gray-400">
                                <span className="font-medium text-neon-cyan">{act.date}</span> - {act.action} in{" "}
                                <span className="text-neon-pink">{act.project}</span>: {act.details}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Activity Heatmap */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">🔥 Activity Heatmap</h3>
                    <div className="heatmap">
                        {user.activityHeatmap.map((week, idx) => (
                            <div
                                key={idx}
                                className="heatmap-cell"
                                style={{ background: `rgba(0, 255, 204, ${week.contributions / 20})` }}
                                title={`Week ${week.week}: ${week.contributions} contributions`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="section">
                    <h3 className="text-2xl font-semibold text-neon-cyan mb-4">📂 Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {user.projects.map((project) => (
                            <div key={project.id} className="bg-gray-900 p-4 rounded-lg shadow-neon hover-scale">
                                <h4 className="font-semibold text-neon-cyan">{project.name}</h4>
                                <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mb-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded text-neon-cyan">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <a href={project.url} target="_blank" rel="noreferrer" className="text-neon-cyan text-sm hover:text-neon-pink">
                                        Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-neon-pink text-sm hover:text-neon-cyan">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
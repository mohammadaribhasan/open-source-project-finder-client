import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Discussions = () => {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        // Fake discussions data
        const fakeDiscussions = [
            {
                _id: 1,
                title: "🚀 Best practices for React performance",
                lastMessage: "Use React.memo and lazy loading wisely...",
                participants: 24,
                updatedAt: "2025-09-18T10:20:00Z",
            },
            {
                _id: 2,
                title: "🐛 Debugging async issues in Node.js",
                lastMessage: "You should try using async hooks API...",
                participants: 15,
                updatedAt: "2025-09-17T22:45:00Z",
            },
            {
                _id: 3,
                title: "⚡ How to optimize MongoDB queries?",
                lastMessage: "Indexing is key! Always index frequently used fields.",
                participants: 32,
                updatedAt: "2025-09-16T14:05:00Z",
            },
            {
                _id: 4,
                title: "🎨 Tailwind vs CSS Modules",
                lastMessage: "Tailwind is more flexible for rapid prototyping...",
                participants: 10,
                updatedAt: "2025-09-15T18:30:00Z",
            },
            {
                _id: 5,
                title: "📦 Best package managers in 2025",
                lastMessage: "pnpm is dominating with speed and workspace features.",
                participants: 18,
                updatedAt: "2025-09-14T12:10:00Z",
            },
            {
                _id: 6,
                title: "🧪 Writing unit tests for APIs",
                lastMessage: "Jest + Supertest is still the best combo...",
                participants: 9,
                updatedAt: "2025-09-12T09:50:00Z",
            },
            {
                _id: 7,
                title: "📊 Best libraries for data visualization",
                lastMessage: "Recharts and D3 are top choices depending on needs.",
                participants: 22,
                updatedAt: "2025-09-11T15:25:00Z",
            },
            {
                _id: 8,
                title: "💡 How do you manage large scale state?",
                lastMessage: "Zustand and Redux Toolkit both shine in scaling...",
                participants: 40,
                updatedAt: "2025-09-10T08:15:00Z",
            },
        ];

        setTimeout(() => {
            setDiscussions(fakeDiscussions);
        }, 800);
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">💬 Discussions</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {discussions.map((d) => (
                        <li
                            key={d._id}
                            className="bg-white/80 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="font-semibold text-lg mb-1 text-gray-800">
                                {d.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                {d.lastMessage}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>👥 {d.participants} participants</span>
                                <span>{new Date(d.updatedAt).toLocaleString()}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Discussions;

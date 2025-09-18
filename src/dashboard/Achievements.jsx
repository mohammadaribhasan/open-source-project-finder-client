import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Achievements = () => {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const fakeBadges = [
            { name: "🔥 100 Commits Streak", level: "Gold" },
            { name: "🌟 Open Source Contributor", level: "Platinum" },
            { name: "🐛 Bug Squasher", level: "Silver" },
            { name: "🚀 Deployed First Project", level: "Bronze" },
            { name: "💡 Idea Generator", level: "Silver" },
            { name: "📦 Package Maintainer", level: "Gold" },
            { name: "⚡ Speedy Coder", level: "Gold" },
            { name: "🛠️ Pull Request Master", level: "Platinum" },
            { name: "🤝 Team Player", level: "Bronze" },
            { name: "📖 Documentation Hero", level: "Silver" },
            { name: "🔒 Security Fixer", level: "Gold" },
            { name: "🎨 UI Designer", level: "Bronze" },
            { name: "⚙️ Backend Builder", level: "Silver" },
            { name: "🌍 Global Contributor", level: "Platinum" },
            { name: "🐍 Python Wizard", level: "Gold" },
            { name: "⚛️ React Pro", level: "Platinum" },
            { name: "🖥️ Full Stack Dev", level: "Platinum" },
            { name: "📊 Data Visualizer", level: "Silver" },
            { name: "🎯 Issue Resolver", level: "Gold" },
            { name: "🏆 Hackathon Winner", level: "Platinum" },
            { name: "💻 1K+ Hours Coding", level: "Gold" },
            { name: "📝 Blogger", level: "Bronze" },
            { name: "🎉 First PR Merged", level: "Silver" },
            { name: "🧩 Algorithm Solver", level: "Gold" },
        ];

        setTimeout(() => {
            setBadges(fakeBadges);
        }, 600);
    }, []);

    // Gradient colors based on levels
    const levelColors = {
        Bronze: "from-orange-300 to-yellow-400",
        Silver: "from-gray-300 to-gray-500",
        Gold: "from-yellow-300 to-yellow-500",
        Platinum: "from-indigo-300 to-indigo-500",
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">🏅 Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${levelColors[badge.level]} text-white transform hover:scale-105 transition-all duration-300`}
                        >
                            <div className="text-4xl text-black mb-3">{badge.name.split(" ")[0]}</div>
                            <h3 className="text-xl text-black font-semibold">
                                {badge.name.replace(/^[^\s]+/, "").trim()}
                            </h3>
                            <p className="mt-2 text-black text-sm font-medium opacity-90">
                                {badge.level} Badge
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;

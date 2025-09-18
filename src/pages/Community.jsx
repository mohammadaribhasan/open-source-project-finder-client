import React, { useEffect, useState } from "react";
import { FaUsers, FaComments, FaProjectDiagram, FaStar, FaSearch } from "react-icons/fa";

// Fake data
const fakeMembers = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    username: `user${i + 1}`,
    contributions: Math.floor(Math.random() * 1000),
    avatar: `https://i.pravatar.cc/50?img=${i + 10}`,
    badges: ["Top Contributor", "Bug Hunter", "Mentor"].sort(() => 0.5 - Math.random()).slice(0, 2),
}));

const fakeDiscussions = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: `Discussion Topic ${i + 1}`,
    replies: Math.floor(Math.random() * 50),
    views: Math.floor(Math.random() * 200),
    author: `Member ${Math.floor(Math.random() * 20 + 1)}`,
    tags: ["React", "Node.js", "OpenSource", "Frontend", "Backend"].sort(() => 0.5 - Math.random()).slice(0, 3),
}));

const fakeGroups = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Group ${i + 1}`,
    description: `This is a professional mock group ${i + 1} for developers contributing to open source and collaborating on projects.`,
    members: Math.floor(Math.random() * 300),
    tags: ["Web", "Mobile", "AI", "DevOps", "UI/UX"].sort(() => 0.5 - Math.random()).slice(0, 2),
}));

const Community = () => {
    const [members, setMembers] = useState([]);
    const [discussions, setDiscussions] = useState([]);
    const [groups, setGroups] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setMembers(fakeMembers);
            setDiscussions(fakeDiscussions);
            setGroups(fakeGroups);
        }, 500);
    }, []);

    const filteredMembers = members.filter(
        (m) => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredDiscussions = discussions.filter((d) => d.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const filteredGroups = groups.filter((g) => g.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-6 text-gray-800">🌐 Community</h1>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex-1 min-w-[180px] bg-white rounded-2xl shadow p-4 flex items-center gap-3 hover:shadow-lg transition">
                    <FaUsers className="text-green-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Members</p>
                        <p className="font-bold text-xl">{members.length}</p>
                    </div>
                </div>
                <div className="flex-1 min-w-[180px] bg-white rounded-2xl shadow p-4 flex items-center gap-3 hover:shadow-lg transition">
                    <FaComments className="text-blue-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Discussions</p>
                        <p className="font-bold text-xl">{discussions.length}</p>
                    </div>
                </div>
                <div className="flex-1 min-w-[180px] bg-white rounded-2xl shadow p-4 flex items-center gap-3 hover:shadow-lg transition">
                    <FaProjectDiagram className="text-purple-500 text-3xl" />
                    <div>
                        <p className="text-gray-500 text-sm">Groups</p>
                        <p className="font-bold text-xl">{groups.length}</p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8 relative">
                <input
                    type="text"
                    placeholder="Search members, discussions or groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Top Members */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">🏆 Top Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-xl transition relative">
                            <div className="flex items-center gap-4 mb-2">
                                <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full border-2 border-green-500" />
                                <div>
                                    <p className="font-medium">{member.name}</p>
                                    <p className="text-xs text-gray-500">@{member.username}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">Contributions: {member.contributions}</p>
                            <div className="flex gap-2 flex-wrap">
                                {member.badges.map((badge, idx) => (
                                    <span key={idx} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs">{badge}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Discussions */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">💬 Recent Discussions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDiscussions.map((discussion) => (
                        <div key={discussion.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold mb-2">{discussion.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">Author: {discussion.author}</p>
                            <p className="text-gray-500 text-sm mb-2">Replies: {discussion.replies} | Views: {discussion.views}</p>
                            <div className="flex gap-2 flex-wrap">
                                {discussion.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Active Groups */}
            <section>
                <h2 className="text-2xl font-bold mb-4">📂 Active Groups</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGroups.map((group) => (
                        <div key={group.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold mb-2">{group.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{group.description}</p>
                            <p className="text-gray-500 text-xs mb-2">Members: {group.members}</p>
                            <div className="flex gap-2 flex-wrap">
                                {group.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Community;

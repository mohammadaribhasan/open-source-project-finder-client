import React from "react";
import { NavLink } from "react-router";
import { FaHome, FaProjectDiagram, FaBookmark, FaTrophy, FaUsers, FaBell, FaUser } from "react-icons/fa";

const Sidebar = () => {
    const links = [
        { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
        { name: "Explore Projects", path: "/dashboard/explore", icon: <FaProjectDiagram /> },
        { name: "Bookmarks", path: "/dashboard/bookmarks", icon: <FaBookmark /> },
        { name: "Contributions", path: "/dashboard/contributions", icon: <FaUsers /> },
        { name: "Achievements", path: "/dashboard/achievements", icon: <FaTrophy /> },
        { name: "Discussions", path: "/dashboard/discussions", icon: <FaUsers /> },
        { name: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-5 flex flex-col">
            <h1 className="text-2xl font-bold mb-6">OS Project Finder</h1>
            <nav className="flex flex-col gap-3">
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded hover:bg-gray-800 ${isActive ? "bg-gray-700" : ""}`
                        }
                    >
                        {link.icon} {link.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;

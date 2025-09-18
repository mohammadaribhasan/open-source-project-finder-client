import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Discover", href: "/discover" },
        { name: "Community", href: "/community" },
        { name: "Login", href: "/login" },
        { name: "Register", href: "/register" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    return (
        <nav className="w-full bg-gradient-to-tr from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-black shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

                {/* Logo */}
                <a href="/" className="text-2xl font-bold">
                    OpenSource<span className="text-yellow-300">Finder</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-indigo-600 font-semibold" : "hover:text-yellow-300"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </div>

                {/* hambrger icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col space-y-4 px-6 py-4">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
export default Navbar;
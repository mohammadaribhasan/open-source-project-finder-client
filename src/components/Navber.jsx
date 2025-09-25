import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Track Firebase user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Discover", href: "/discover" },
        { name: "Community", href: "/community" },
    ];

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <nav className="w-full bg-gradient-to-tr from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-black shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold">
                    OpenSource<span className="text-yellow-300">Finder</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-indigo-600 font-semibold" : "hover:text-yellow-300"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* User Section */}
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigate("/dashboard/profile")}
                                className="flex items-center space-x-2"
                            >
                                <img
                                    src={user.photoURL} // fallback avatar
                                    alt="profile"
                                    className="w-8 h-8 rounded-full border-2 border-indigo-600"
                                />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to="/login"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
                            >
                                Register
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Hamburger icon */}
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
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className="hover:text-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* User Section for Mobile */}
                    {user ? (
                        <div className="flex flex-col space-y-2">
                            <button
                                onClick={() => {
                                    navigate("/dashboard");
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                                    alt="profile"
                                    className="w-8 h-8 rounded-full border-2 border-indigo-600"
                                />
                                <span>{user.displayName || "Profile"}</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="hover:text-indigo-600 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="hover:text-yellow-400 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

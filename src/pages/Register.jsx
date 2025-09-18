import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaTerminal, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const terminalLogs = [
    "npm install react react-dom",
    "npm install express mongoose",
    "npm install tailwindcss framer-motion",
    "npm install @reduxjs/toolkit react-redux",
    "npm install react-router-dom",
    "npm install nodemon concurrently",
    "npm install bcrypt jsonwebtoken",
    "npm install axios dotenv cors",
    "✔ packages installed successfully",
    "✔ starting dev server...",
    "🚀 Happy Coding with OpenSourceFinder!"
];

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch = password === confirmPassword || confirmPassword === "";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden font-mono">
            {/* Background terminal animation */}
            <div className="absolute inset-0 opacity-15 text-green-400 text-sm leading-7 overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "-200%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="whitespace-pre"
                >
                    {terminalLogs.join("\n")}
                </motion.div>
            </div>

            {/* Registration Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-green-400/30"
            >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-green-400 text-3xl" />
                    <h1 className="text-2xl font-bold">Sign Up</h1>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-gray-300">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-gray-300">Confirm Password</label>
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="••••••••"
                            className={`w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 ${passwordsMatch
                                    ? "focus:ring-green-400"
                                    : "focus:ring-red-500 border-red-500"
                                } placeholder-gray-400`}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {!passwordsMatch && (
                            <p className="text-red-500 text-xs mt-1">Passwords do not match!</p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={!passwordsMatch}
                        className={`w-full font-semibold py-3 rounded-lg shadow-lg transition ${passwordsMatch
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : "bg-gray-600 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Create Account
                    </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-600" />
                    <span className="px-3 text-gray-400 text-sm">or</span>
                    <hr className="flex-1 border-gray-600" />
                </div>

                {/* Social Signup */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 rounded-lg shadow-lg transition mb-4"
                >
                    <FaTerminal className="text-green-400" />
                    Sign up with Google
                </motion.button>

                {/* Login Link */}
                <div className="text-center mt-2">
                    <p className="text-gray-400 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-400 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>

            {/* Floating terminal icon */}
            <motion.div
                className="absolute bottom-8 right-8 text-green-400 text-4xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaTerminal />
            </motion.div>
        </div>
    );
};

export default Register;

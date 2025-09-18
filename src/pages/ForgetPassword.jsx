import React from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaUnlockAlt } from "react-icons/fa";

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
    "🔑 Password recovery initiated...",
    "🚀 Reset your password with OpenSourceFinder!"
];

const ForgetPassword = () => {
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

            {/* Forget Password Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-green-400/30"
            >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <FaUnlockAlt className="text-green-400 text-3xl" />
                    <h1 className="text-2xl font-bold">Forget Password</h1>
                </div>

                <p className="text-gray-400 mb-5 text-sm">
                    Enter your registered email to receive password reset instructions.
                </p>

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

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg transition"
                    >
                        Send Reset Link
                    </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-600" />
                    <span className="px-3 text-gray-400 text-sm">or</span>
                    <hr className="flex-1 border-gray-600" />
                </div>

                {/* Back to login */}
                <div className="text-center mt-2">
                    <p className="text-gray-400 text-sm">
                        Remembered your password?{" "}
                        <a href="/login" className="text-green-400 font-medium hover:underline">
                            Login
                        </a>
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

export default ForgetPassword;

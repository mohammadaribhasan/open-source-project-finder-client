import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { auth } from "../firebase/firebase.config"; // your firebase config
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
    const [showForm, setShowForm] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const sampleCode = `
// Reset Password Function
const resetPassword = (email) => {
    if(!email) {
        return "Please enter a valid email.";
    }
    sendResetLink(email);
    return "Reset link sent!";
}
`;

    // Typing effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(sampleCode.slice(0, index));
            index++;
            if (index > sampleCode.length) {
                clearInterval(interval);
                setTimeout(() => setShowForm(true), 800);
            }
        }, 35);
        return () => clearInterval(interval);
    }, []);

    // Handle Reset
    const handleReset = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!email) {
            setError("⚠️ Please enter your email.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("✅ Reset link has been sent to your email.");
        } catch (err) {
            // Firebase usually gives long technical error messages
            if (err.code === "auth/user-not-found") {
                setError("❌ No account found with this email.");
            } else if (err.code === "auth/invalid-email") {
                setError("❌ Invalid email address.");
            } else {
                setError("❌ " + err.message);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 font-mono px-4">
            <div className="max-w-md w-full">
                <AnimatePresence>
                    {!showForm ? (
                        <motion.pre
                            key="typing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black/70 border border-blue-500 rounded-lg p-6 shadow-lg overflow-hidden"
                        >
                            <code>{typedText}</code>
                            <span className="animate-pulse">|</span>
                        </motion.pre>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-gray-900/90 border border-blue-500 rounded-2xl p-10 shadow-2xl"
                        >
                            <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                                Reset Password
                            </h2>

                            {/* Error / Success */}
                            {error && (
                                <p className="text-red-500 text-sm text-center mb-3">{error}</p>
                            )}
                            {message && (
                                <p className="text-green-400 text-sm text-center mb-3">
                                    {message}
                                </p>
                            )}

                            <form className="space-y-6" onSubmit={handleReset}>
                                <div className="flex items-center border border-gray-600 rounded-xl px-4 py-3 bg-black/60 focus-within:ring-2 focus-within:ring-blue-400 transition">
                                    <FiMail className="text-blue-400 mr-3 text-lg" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-transparent flex-1 outline-none text-gray-100 placeholder-gray-500 text-sm"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition"
                                >
                                    Send Reset Instructions
                                </motion.button>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-400">
                                A reset link will be sent to your email.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ForgetPassword;

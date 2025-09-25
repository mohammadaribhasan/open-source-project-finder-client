import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import {
    auth,
    googleProvider,
    githubProvider,
    signInWithPopup,
} from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");

    const passwordsMatch = password === confirmPassword;

    // Email + Password Signup
    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        if (!passwordsMatch) {
            setError("Passwords do not match!");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            // Update user profile with name + image
            await updateProfile(userCredential.user, {
                displayName: fullName,
                photoURL: photoURL,
            });
            console.log("Registered User:", userCredential.user);
        } catch (err) {
            setError(err.message);
        }
    };

    // Google Signup
    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google User:", result.user);
        } catch (err) {
            setError(err.message);
        }
    };

    // GitHub Signup
    const handleGithubSignup = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            console.log("GitHub User:", result.user);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create Account
                </h2>

                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                <form className="space-y-4" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Image URL"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm Password"
                            className={`w-full p-3 rounded-lg border outline-none ${passwordsMatch
                                ? "border-gray-300 focus:ring-2 focus:ring-green-400"
                                : "border-red-500 focus:ring-2 focus:ring-red-500"
                                }`}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={() => setShowConfirm(!showConfirm)}
                        >
                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {!passwordsMatch && confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                Passwords do not match!
                            </p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={!passwordsMatch}
                        className={`w-full font-semibold py-3 rounded-lg shadow-md transition ${passwordsMatch
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Sign Up
                    </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Social Buttons */}
                <div className="space-y-3">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleGoogleSignup}
                        className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg shadow-md transition"
                    >
                        <FaGoogle /> Continue with Google
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleGithubSignup}
                        className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg shadow-md transition"
                    >
                        <FaGithub /> Continue with GitHub
                    </motion.button>
                </div>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-green-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

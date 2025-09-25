import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";

// Firebase
import { auth } from "../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { Link } from "react-router"; // ✅ for navigation

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sampleCode = `
// Login Function
const login = (email, password) => {
    if(!email || !password) {
        return "Please enter valid credentials.";
    }
    authenticateUser(email, password);
    return "Login successful!";
}
`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(sampleCode.slice(0, index));
      index++;
      if (index > sampleCode.length) {
        clearInterval(interval);
        setTimeout(() => setShowForm(true), 800);
      }
    }, 10); // ✅ Faster typing (~2-3s total)
    return () => clearInterval(interval);
  }, []);

  // Email + Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login successful!");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("✅ Google login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  // GitHub Login
  const handleGithubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      alert("✅ GitHub login successful!");
    } catch (err) {
      setError(err.message);
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
              className="bg-black/70 border border-green-500 rounded-lg p-6 shadow-lg overflow-hidden"
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
              className="bg-gray-900/90 border border-green-500 rounded-2xl p-10 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
                🔑 Login
              </h2>
              {error && (
                <p className="text-red-400 text-center mb-3 text-sm">{error}</p>
              )}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="flex items-center border border-gray-600 rounded-xl px-4 py-3 bg-black/60 focus-within:ring-2 focus-within:ring-green-400 transition">
                  <FiMail className="text-green-400 mr-3 text-lg" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent flex-1 outline-none text-gray-100 placeholder-gray-500 text-sm"
                  />
                </div>
                {/* Password Input */}
                <div className="flex items-center border border-gray-600 rounded-xl px-4 py-3 bg-black/60 focus-within:ring-2 focus-within:ring-green-400 transition">
                  <FiLock className="text-green-400 mr-3 text-lg" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent flex-1 outline-none text-gray-100 placeholder-gray-500 text-sm"
                  />
                </div>
                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition"
                >
                  {loading ? "Logging in..." : "Login"}
                </motion.button>
              </form>

              {/* Links */}
              <div className="flex justify-between mt-4 text-sm text-gray-400">
                <Link to="/register" className="hover:text-green-400">
                  Register
                </Link>
                <Link to="/forget" className=" text-red-500 hover:text-green-400">
                  Forgot password?
                </Link>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <hr className="flex-1 border-gray-700" />
                <span className="px-3 text-gray-400 text-sm">or</span>
                <hr className="flex-1 border-gray-700" />
              </div>

              {/* Social Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
                >
                  <FaGoogle className="text-lg" />
                  Continue with Google
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleGithubLogin}
                  className="w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl shadow-lg transition"
                >
                  <FaGithub className="text-lg" />
                  Continue with GitHub
                </motion.button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-400">
                Enter your credentials or use social login to access your account.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CTASection = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-[#F5EFE6] to-[#F5EFE6] text-white text-center px-6 overflow-hidden">
            {/* Decorative Background Blobs */}
            <motion.div
                className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Heading */}
                <motion.h2
                    className="text-4xl md:text-6xl font-extrabold mb-6 text-center leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}
                >
                    Ready to Make Your <span className="text-yellow-400">First Contribution?</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    className="text-lg md:text-2xl text-black max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ textShadow: "0 1px 10px rgba(0,0,0,0.3)" }}
                >
                    Join thousands of developers across the globe and start your open-source journey today.
                    Build projects, collaborate, and grow your skills with the community.
                </motion.p>

                {/* Call to Action Button */}
                <Link to="/register">
                    <motion.button
                        className="relative px-12 py-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black text-lg md:text-xl rounded-full font-semibold shadow-2xl hover:scale-105 hover:shadow-yellow-500/70 transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                        {/* Subtle Glow Animation */}
                        <span className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-10 blur-xl animate-pulse-slow"></span>
                    </motion.button>
                </Link>
            </div>

            {/* Bottom Decorative Glow */}
            <motion.div
                className="absolute bottom-0 w-64 h-64 rounded-full bg-yellow-400 opacity-15 blur-3xl z-0 animate-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />
        </section>
    );
};

export default CTASection;

import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 max-width-7xl mx-auto">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        OpenSource<span className="text-yellow-400">Finder</span>
                    </h2>
                    <p className="mt-3 text-sm">
                        Helping developers, students, and beginners discover open-source
                        projects worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/projects" className="hover:text-yellow-400">Projects</a></li>
                        <li><a href="/discover" className="hover:text-yellow-400">Discover</a></li>
                        <li><a href="/community" className="hover:text-yellow-400">Community</a></li>
                        <li><a href="/profile" className="hover:text-yellow-400">Profile</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        <a href="mailto:opensourcefinder@gmail.com"><Mail /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Open-Source Project Finder. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;
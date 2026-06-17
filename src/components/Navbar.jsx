import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // If scrolled to the bottom of page, highlight Contact
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 55) {
                setActiveSection('contact');
                return;
            }

            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 120; // Offset for navbar

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-6">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-black dark:bg-white group-hover:scale-110 transition-transform">
                        <Code2 className="text-white dark:text-zinc-950 w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold font-[Outfit] tracking-wide text-black dark:text-white">
                        Vijay<span className="text-zinc-600 dark:text-zinc-400">.Dev</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <a
                                key={link.title}
                                href={link.href}
                                className={`transition-all duration-300 text-sm font-medium tracking-wider uppercase relative py-1 ${
                                    isActive
                                        ? 'text-black dark:text-white'
                                        : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                                }`}
                            >
                                {link.title}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavBorder"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                    <a
                        href="#contact"
                        className="px-6 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-black/10 dark:border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.slice(1);
                                return (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-xl font-medium transition-colors duration-300 ${
                                            isActive
                                                ? 'text-black dark:text-white font-semibold'
                                                : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                                        }`}
                                    >
                                        {link.title}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

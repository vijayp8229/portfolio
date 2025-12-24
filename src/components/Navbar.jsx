import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-6">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-white group-hover:scale-110 transition-transform">
                        <Code2 className="text-black w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold font-[Outfit] tracking-wide text-white">
                        Vijay<span className="text-zinc-400">.Dev</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
                        >
                            {link.title}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-blue-400"
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
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-gray-300 hover:text-white font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

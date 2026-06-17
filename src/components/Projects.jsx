import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const { projects } = portfolioData;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Laravel', 'Drupal'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute inset-0 bg-indigo-500/5 -z-10 skew-y-3 transform origin-top-left" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">Selected Projects</h2>
                    <p className="text-zinc-600 dark:text-zinc-500">Some of the key projects I've worked on recently.</p>
                </motion.div>

                {/* Category Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                                selectedCategory === category
                                    ? 'bg-black dark:bg-white text-white dark:text-zinc-950 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                                    : 'bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400 hover:border-black/20 dark:hover:border-white/20'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                whileHover={{ y: -10, rotateX: 2, rotateY: 2, scale: 1.02 }}
                                className="group bg-white dark:bg-[#09090b] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 perspective-1000"
                            >
                                <div className="p-8">
                                    <div className="text-sm font-bold text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">{project.category}</div>
                                    <h3 className="text-2xl font-bold mb-3 text-black dark:text-white transition-colors">{project.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-500 mb-6 leading-relaxed text-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                                            <Github size={18} /> Code
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors ml-auto">
                                            Live Demo <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-linear-to-r from-black dark:from-white to-zinc-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

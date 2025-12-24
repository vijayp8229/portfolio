import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const { projects } = portfolioData;

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
                    <p className="text-zinc-500">Some of the key projects I've worked on recently.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateX: 2, rotateY: 2, scale: 1.02 }}
                            className="group bg-[#09090b] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-white/5 perspective-1000"
                        >
                            <div className="p-8">
                                <div className="text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wider">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-3 text-white transition-colors">{project.title}</h3>
                                <p className="text-zinc-500 mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-800/50 border border-white/5 text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-white transition-colors">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors ml-auto">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-white to-zinc-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

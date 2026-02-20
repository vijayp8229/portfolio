import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const { skills, personal } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-20 bg-white/50 dark:bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="section-title">About Me & Skills</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        I have a deep passion for building secure and scalable backend architectures.
                        My expertise lies in the PHP ecosystem, crafting robust solutions with Laravel and Drupal.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 rounded-xl bg-white dark:bg-[#09090b] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900/80 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-950 transition-colors">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-black dark:text-white">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-linear-to-r from-black dark:from-white to-zinc-400"
                                />
                            </div>
                            <div className="mt-2 text-right text-sm text-gray-500">
                                {skill.level}% Proficiency
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;

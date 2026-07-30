import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { personal } = portfolioData;
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(100);
    const toRotate = ["Full Stack Developer", "Laravel Expert", "Drupal Specialist", "PHP Developer"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(2000); // Wait before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } else {
            setDelta(100);
        }
    };

    // Mouse parallax for 3D card
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    const profileImagePath = personal.profileImage 
        ? `${import.meta.env.BASE_URL}${personal.profileImage.replace(/^\//, '')}` 
        : `${import.meta.env.BASE_URL}profile.jpg`;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements - Subtle/Linear */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-black/5 dark:bg-white/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight text-transparent bg-clip-text bg-linear-to-r from-black dark:from-white to-zinc-500 break-words">
                        Hi, I'm <br />
                        {personal.name}
                    </h1>

                    <div className="h-8 md:h-10 mb-6 flex items-center justify-center md:justify-start">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-light border-r-2 border-black/50 dark:border-white/50 pr-2 animate-pulse">
                            {text}
                        </h2>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-500 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {personal.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 px-8 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto text-center"
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-black dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative perspective-1000 mt-10 md:mt-0"
                    onMouseMove={handleMouseMove}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative w-full max-w-[320px] md:max-w-md mx-auto aspect-[3/4] group cursor-pointer"
                    >
                        {/* Glow effect with colors matching the photo's warm maroon background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/30 via-amber-900/25 to-zinc-900/10 dark:from-rose-950/40 dark:via-amber-950/30 dark:to-zinc-950/20 rounded-[2rem] opacity-75 blur-3xl group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Interactive Frame */}
                        <div className="relative h-full w-full z-10 bg-white/5 dark:bg-zinc-950/30 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-[2rem] p-3 shadow-2xl overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:border-black/20 dark:hover:border-white/20">
                            {/* Profile Image container */}
                            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-zinc-900">
                                <img 
                                    src={profileImagePath} 
                                    alt={personal.name} 
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Bottom overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Glass Info Bar */}
                            <div className="mt-3 px-3 py-2 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                                <div>
                                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm md:text-base tracking-wide">{personal.name}</h3>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">{personal.title}</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-zinc-500/10 border border-black/5 dark:border-white/5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] md:text-xs font-semibold text-zinc-800 dark:text-zinc-300">Available</span>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

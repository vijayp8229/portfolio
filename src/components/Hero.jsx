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
                    <div className="inline-block px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 mb-6 text-sm font-semibold tracking-wide">
                        Available for Projects
                    </div>

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
                    className="flex-1 relative hidden md:block perspective-1000"
                    onMouseMove={handleMouseMove}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative w-full max-w-md mx-auto aspect-square group"
                    >
                        <div className="absolute inset-0 bg-linear-to-tr from-zinc-200 dark:from-zinc-800 to-zinc-300 dark:to-zinc-900 rounded-2xl opacity-50 blur-3xl group-hover:opacity-70 transition-opacity duration-500"></div>
                        <div className="relative z-10 bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 border-b border-black/5 dark:border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            </div>
                            <div className="space-y-3 font-mono text-sm text-zinc-600 dark:text-zinc-500">
                                <div className="flex">
                                    <span className="text-indigo-600 dark:text-indigo-400 mr-2">class</span>
                                    <span className="text-black dark:text-white">Developer</span>
                                    <span className="text-zinc-400 dark:text-zinc-600"> {`{`}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-purple-400">constructor</span>() {`{`}
                                </div>
                                <div className="pl-8">
                                    <span className="text-indigo-400">this</span>.<span className="text-zinc-400">stack</span> = [
                                    <span className="text-green-400">'Laravel'</span>,
                                    <span className="text-cyan-400">'Drupal'</span>
                                    ];
                                </div>
                                <div className="pl-4">{`}`}</div>
                                <div className="pl-4">
                                    <span className="text-purple-400">buildFuture</span>() {`{`}
                                </div>
                                <div className="pl-8">
                                    <span className="text-indigo-400">return</span> <span className="text-emerald-400">'Scalable Solutions'</span>;
                                </div>
                                <div className="pl-4">{`}`}</div>
                                <div>{`}`}</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

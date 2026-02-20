import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { personal } = portfolioData;
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual EmailJS Header-ID, Template-ID, and Public Key
        // Sign up at https://www.emailjs.com/
        emailjs.sendForm('service_53mim5x', 'template_qev8dej', form.current, 'AQ3P3Uv2Wx6JxrmAa')
            .then((result) => {
                console.log(result.text);
                setIsSending(false);
                setIsSent(true);
                setTimeout(() => setIsSent(false), 5000); // Reset success after 5s
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                alert("Failed to send message. Please try again or email directly.");
            });
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-black/5 dark:bg-zinc-800/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-center block mb-16"
                >
                    Get In Touch
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-black dark:text-white">Let's Talk About Your Project</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 mb-8 text-lg">
                            I'm always interested in hearing about new projects and opportunities in the Laravel and Drupal space.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${personal.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#09090b] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                                <div className="p-3 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-600 dark:text-zinc-500 uppercase tracking-wider">Email Me</div>
                                    <div className="text-lg font-medium text-black dark:text-white">{personal.email}</div>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href={personal.github} className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 text-zinc-600 dark:text-zinc-500 transition-all">
                                    <Github size={24} />
                                </a>
                                <a href={personal.linkedin} className="p-4 rounded-full bg-indigo-500/10 hover:bg-indigo-600 hover:text-black dark:hover:text-white text-indigo-600 dark:text-indigo-400 transition-all">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" name="user_name" placeholder="Name" required className="w-full bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-zinc-400 dark:placeholder-zinc-600" />
                                <input type="email" name="user_email" placeholder="Email" required className="w-full bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-zinc-400 dark:placeholder-zinc-600" />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" className="w-full bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-zinc-400 dark:placeholder-zinc-600" />
                            <textarea name="message" rows="5" placeholder="Message" required className="w-full bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder-zinc-400 dark:placeholder-zinc-600"></textarea>
                            <button
                                type="submit"
                                disabled={isSending || isSent}
                                className={`w-full font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 ${isSent ? 'bg-green-500 text-white' : 'bg-black dark:bg-white text-white dark:text-zinc-950 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-1'}`}
                            >
                                {isSending ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : isSent ? (
                                    <>Message Sent! <CheckCircle size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

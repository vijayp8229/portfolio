import React, { useState } from 'react';
import { Settings as SettingsIcon, X, Moon, Sun, Type, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const SettingsPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, accentColor, setAccentColor, fontSize, setFontSize } = useTheme();

    const colors = [
        { name: 'White', value: '#fafafa' },
        { name: 'Blue', value: '#3b82f6' },
        { name: 'Emerald', value: '#10b981' },
        { name: 'Violet', value: '#8b5cf6' },
        { name: 'Rose', value: '#f43f5e' },
        { name: 'Orange', value: '#f97316' }
    ];

    const sizes = [
        { name: 'Small', value: 'sm', label: 'A-', scale: 0.9 },
        { name: 'Normal', value: 'base', label: 'A', scale: 1 },
        { name: 'Large', value: 'lg', label: 'A+', scale: 1.1 }
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-4 rounded-full bg-[var(--bg-secondary)] border border-[var(--accent-glow)] text-[var(--accent-primary)] shadow-2xl hover:scale-110 transition-transform z-50 group"
            >
                <SettingsIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-80 bg-[var(--bg-secondary)] border-l border-[var(--accent-glow)] shadow-2xl z-50 flex flex-col"
                    >
                        <div className="p-6 border-b border-[var(--accent-glow)] flex justify-between items-center">
                            <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--text-primary)]">
                                <SettingsIcon className="w-5 h-5" /> Preferences
                            </h2>
                            <button onClick={() => setIsOpen(false)} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 flex-1 overflow-y-auto space-y-8">
                            {/* Theme Toggle */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                                    <Sun className="w-4 h-4" /> Theme
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setTheme('light')}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${theme === 'light' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--accent-glow)] hover:border-[var(--text-secondary)]'}`}
                                    >
                                        <Sun className="w-4 h-4" /> Light
                                    </button>
                                    <button
                                        onClick={() => setTheme('dark')}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${theme === 'dark' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--accent-glow)] hover:border-[var(--text-secondary)]'}`}
                                    >
                                        <Moon className="w-4 h-4" /> Dark
                                    </button>
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                                    <Palette className="w-4 h-4" /> Brand Color
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {colors.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => setAccentColor(c.value)}
                                            style={{ backgroundColor: c.value }}
                                            className={`h-12 border border-black/10 dark:border-white/10 rounded-lg transition-transform ${accentColor === c.value ? 'scale-110 ring-4 ring-offset-2 ring-offset-[var(--bg-secondary)] ring-[var(--accent-primary)]' : 'hover:scale-105'} flex items-center justify-center`}
                                            title={c.name}
                                        >
                                            {accentColor === c.value && <Check className="w-6 h-6 drop-shadow-md" style={{ color: c.name === 'White' ? '#000' : '#fff' }} />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Font Size Selection */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                                    <Type className="w-4 h-4" /> Typography Scale
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {sizes.map((s) => (
                                        <button
                                            key={s.name}
                                            onClick={() => setFontSize(s.value)}
                                            className={`p-3 rounded-lg border transition-all flex flex-col items-center justify-center gap-1 ${fontSize === s.value ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--accent-glow)] hover:border-[var(--text-secondary)]'}`}
                                        >
                                            <span style={{ transform: `scale(${s.scale})` }} className="font-bold">{s.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SettingsPanel;

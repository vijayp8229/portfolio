import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Theme: 'dark' or 'light'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    // Accent Color: hex
    const [accentColor, setAccentColor] = useState(localStorage.getItem('accentColor') || '#fafafa');
    // Font Size: 'sm', 'base', 'lg'
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'base');

    useEffect(() => {
        const root = document.documentElement;

        // Apply Theme (Dark/Light)
        if (theme === 'dark') {
            root.classList.add('dark');
            root.style.setProperty('--bg-primary', '#000000');
            root.style.setProperty('--bg-secondary', '#09090b');
            root.style.setProperty('--bg-tertiary', '#18181b');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#a1a1aa');
            root.style.setProperty('--accent-secondary', '#71717a');
            root.style.setProperty('--accent-glow', 'rgba(255, 255, 255, 0.1)');
        } else {
            root.classList.remove('dark');
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f4f4f5');
            root.style.setProperty('--bg-tertiary', '#e4e4e7');
            root.style.setProperty('--text-primary', '#000000');
            root.style.setProperty('--text-secondary', '#52525b');
            root.style.setProperty('--accent-secondary', '#a1a1aa');
            root.style.setProperty('--accent-glow', 'rgba(0, 0, 0, 0.1)');
        }

        // Apply Accent Color
        root.style.setProperty('--accent-primary', accentColor);

        // Apply Font Size
        let sizePx = '16px';
        if (fontSize === 'sm') sizePx = '14px';
        if (fontSize === 'lg') sizePx = '18px';
        if (fontSize === 'xl') sizePx = '20px';
        root.style.fontSize = sizePx;

        // Save to localStorage
        localStorage.setItem('theme', theme);
        localStorage.setItem('accentColor', accentColor);
        localStorage.setItem('fontSize', fontSize);

    }, [theme, accentColor, fontSize]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, accentColor, setAccentColor, fontSize, setFontSize }}>
            {children}
        </ThemeContext.Provider>
    );
};

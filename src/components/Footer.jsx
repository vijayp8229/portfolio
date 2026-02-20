import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-black/5 dark:border-white/5 bg-white dark:bg-black text-center">
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
                © {new Date().getFullYear()} Vijay.Dev. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

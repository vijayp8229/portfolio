import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-black text-center">
            <p className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} Vijay.Dev. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

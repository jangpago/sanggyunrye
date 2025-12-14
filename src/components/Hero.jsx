import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { introConfig } from '../constants';

const Hero = () => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 600], [0, 40]); // subtle parallax on scroll

    const getDDayLabel = () => {
        const target = new Date(introConfig.dDayDate).getTime();
        const now = new Date().getTime();
        const difference = target - now;
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

        if (days > 0) return `D-${days}`;
        if (days === 0) return 'D-Day';
        return `D+${Math.abs(days)}`;
    };

    const [timeLeft, setTimeLeft] = useState(() => getDDayLabel());

    useEffect(() => {
        const update = () => setTimeLeft(getDDayLabel());
        const interval = setInterval(update, 60 * 1000); // update every minute
        return () => clearInterval(interval);
    }, []);

    // Typing effect hook logic implemented directly
    const text = introConfig.typingText;
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <section className="w-full h-screen relative flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Background Image with Dim */}
            <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
                <img
                    src="/intro_bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            </motion.div>

            <div className="z-10 text-white p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-xl sm:text-2xl font-serif font-light leading-relaxed whitespace-pre-line min-h-[5rem]">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="mt-8"
                >
                    <p className="font-serif text-sm tracking-[0.3em] uppercase opacity-90">
                        상견례 <span className="font-semibold">{timeLeft}</span>
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 z-10 animate-bounce text-white/70"
            >
                <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;

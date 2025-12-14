import React from 'react';
import { motion } from 'framer-motion';
import { storyData } from '../constants';

const StoryTimeline = () => {
    return (
        <section className="w-full py-20 px-6 bg-white relative overflow-hidden">
            <div className="flex flex-col items-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl font-serif text-accent font-medium mb-2"
                >
                    Our Story
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xs text-[#888] tracking-widest uppercase"
                >
                    2019 - 2025
                </motion.p>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Vertical Line - Extends full height */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-accent/30 z-0 h-full"
                />

                <div className="space-y-32 w-full z-10 pb-20">
                    {storyData.map((story, index) => (
                        <div key={story.id} className={`flex w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between relative group`}>

                            {/* Big Stylized Year Background */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.05, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className={`absolute top-1/2 -translate-y-1/2 text-8xl font-serif font-bold text-accent whitespace-nowrap pointer-events-none select-none ${index % 2 === 0 ? '-left-4' : '-right-4'}`}
                            >
                                {story.year}
                            </motion.span>

                            {/* Dot on the line */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full outline outline-4 outline-white z-20"
                            />

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="w-[45%]"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-float aspect-[3/4] hover:scale-[1.02] transition-transform duration-500">
                                    <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className={`w-[45%] flex flex-col justify-center ${index % 2 === 0 ? 'text-left pl-4' : 'text-right pr-4'}`}
                            >
                                <span className="text-accent text-[10px] tracking-widest block mb-2 font-medium uppercase font-serif">
                                    {story.date}
                                </span>
                                <h3 className="text-lg font-serif text-[#222] mb-3 leading-snug break-keep">
                                    {story.title}
                                </h3>
                                <p className="text-xs text-[#555] font-light leading-6 word-keep break-keep whitespace-pre-line">
                                    {story.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryTimeline;

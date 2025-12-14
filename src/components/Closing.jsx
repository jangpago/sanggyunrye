import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Umbrella } from 'lucide-react';
import { weatherInfo, closingConfig } from '../constants';

const Closing = () => {
    return (
        <footer className="w-full py-20 px-6 bg-white flex flex-col items-center text-center relative overflow-hidden">

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#eee] to-transparent mb-16"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center w-full max-w-[320px]"
            >
                {/* Weather Card */}
                <div className="w-full bg-[#f9f9f9] rounded-2xl p-6 shadow-sm border border-[#eee] mb-12 flex flex-col items-center relative overflow-hidden">
                    <div className="text-sm text-[#666] mb-4 flex items-center gap-1 font-medium">
                        {weatherInfo.date} <span className="w-1 h-1 rounded-full bg-[#ccc] mx-1"></span> {weatherInfo.location}
                    </div>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        {/* Icon */}
                        <div className="text-[#999]">
                            {weatherInfo.iconType === 'cloudy' && <Cloud size={42} strokeWidth={1.5} />}
                        </div>

                        {/* Temperatures */}
                        <div className="flex items-center text-3xl font-bold text-[#333] tracking-tight">
                            <span className="text-[#888] text-2xl font-normal mr-2">{weatherInfo.tempMin}</span>
                            <span className="mx-1 text-[#ddd] font-light">/</span>
                            <span className="ml-2 text-[#2c2c2c]">{weatherInfo.tempMax}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 mb-6 w-full">
                        <div className="text-[#555] font-medium flex items-center gap-2 text-sm">
                            {weatherInfo.condition}
                        </div>

                        {/* Rain Prob Badge */}
                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                            <Umbrella size={12} />
                            <span>강수확률 {weatherInfo.rainProb}</span>
                        </div>
                    </div>

                    {/* Message */}
                    {weatherInfo.message && (
                        <p className="font-serif italic text-[#555] text-sm leading-relaxed whitespace-pre-line border-t border-[#eee] pt-5 w-full">
                            {weatherInfo.message}
                        </p>
                    )}
                </div>


                {/* Closing Ment */}
                <p className="font-serif text-lg text-[#222] leading-relaxed whitespace-pre-line mb-12">
                    {closingConfig.ment}
                </p>

                {/* Spacer in place of removed calendar buttons */}
                <div className="mb-12" />

                {/* Copyright */}
                <span className="text-[10px] text-[#ccc] tracking-widest uppercase">
                    {closingConfig.copyright}
                </span>
            </motion.div>
        </footer>
    );
};

export default Closing;

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Calendar, Umbrella } from 'lucide-react';
import { weatherInfo, closingConfig, calendarEvent } from '../constants';

const Closing = () => {
    // Helper to generate Google Calendar Link
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodeURIComponent(calendarEvent.location)}&dates=${calendarEvent.startTime}/${calendarEvent.endTime}`;

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
                    {/* Message */}
                    {weatherInfo.message && (
                        <p className="font-serif italic text-[#555] text-sm leading-relaxed whitespace-pre-line border-t border-[#eee] pt-5 w-full">
                            {weatherInfo.message}
                        </p>
                    )}
                </div>


                {/* Closing Ment */}
                <p className="font-serif text-lg text-[#222] leading-relaxed whitespace-pre-line mb-10">
                    {closingConfig.ment}
                </p>

                {/* Calendar Button */}
                <a
                    href={googleCalendarLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-8 py-4 bg-[#f2f2f2] text-[#444] rounded-full text-sm font-medium hover:bg-[#e0e0e0] transition mb-16 w-full max-w-[280px]"
                >
                    <Calendar size={16} className="mr-2 opacity-70" />
                    캘린더에 일정 저장
                </a>

                {/* Copyright */}
                <span className="text-[10px] text-[#ccc] tracking-widest uppercase">
                    {closingConfig.copyright}
                </span>
            </motion.div>
        </footer>
    );
};

export default Closing;

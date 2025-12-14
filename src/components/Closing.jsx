import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Calendar, Umbrella } from 'lucide-react';
import { weatherInfo, closingConfig, calendarEvent } from '../constants';

const Closing = () => {
    // Helper to generate Google Calendar Link
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&details=${encodeURIComponent(calendarEvent.description)}&location=${encodeURIComponent(calendarEvent.location)}&dates=${calendarEvent.startTime}/${calendarEvent.endTime}`;

    // Function to generate ICS file content
    const generateICS = () => {
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Engagement Invitation//Calendar//KO',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `DTSTART:${calendarEvent.startTime}`,
            `DTEND:${calendarEvent.endTime}`,
            `SUMMARY:${calendarEvent.title}`,
            `DESCRIPTION:${calendarEvent.description}`,
            `LOCATION:${calendarEvent.location}`,
            'STATUS:CONFIRMED',
            'SEQUENCE:0',
            'BEGIN:VALARM',
            'TRIGGER:-PT1H',
            'ACTION:DISPLAY',
            'DESCRIPTION:1시간 전 알림',
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        return icsContent;
    };

    // Function to download ICS file
    const downloadICS = () => {
        const icsContent = generateICS();
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '상견례_일정.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

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

                {/* Calendar Buttons */}
                <div className="flex flex-col gap-3 mb-4 w-full">
                    <a
                        href={googleCalendarLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-8 py-4 bg-[#f2f2f2] text-[#444] rounded-full text-sm font-medium hover:bg-[#e0e0e0] transition w-full max-w-[280px]"
                    >
                        <Calendar size={16} className="mr-2 opacity-70" />
                        Google 캘린더로 추가
                    </a>
                    <button
                        onClick={downloadICS}
                        className="flex items-center justify-center px-8 py-4 border border-[#e5e5e5] bg-white text-[#444] rounded-full text-sm font-medium hover:bg-[#f7f7f7] transition w-full max-w-[280px] cursor-pointer"
                    >
                        <Calendar size={16} className="mr-2 opacity-70" />
                        iOS/Outlook용 .ics 저장
                    </button>
                </div>

                <p className="text-[11px] text-[#999] leading-5 mb-12 px-4">
                    카카오톡 등 인앱 브라우저에서는 다운로드 후 자동 실행이 안 될 수 있습니다.
                    새창에서 열기(사파리/크롬) 후 .ics 파일을 열어 캘린더에 추가해주세요.
                </p>

                {/* Copyright */}
                <span className="text-[10px] text-[#ccc] tracking-widest uppercase">
                    {closingConfig.copyright}
                </span>
            </motion.div>
        </footer>
    );
};

export default Closing;

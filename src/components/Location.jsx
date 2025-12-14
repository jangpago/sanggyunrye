import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { locationInfo } from '../constants';

const Location = () => {
    return (
        <section className="w-full py-24 px-6 bg-[#F9F8F6] text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-xl font-serif mb-10 text-accent font-medium">오시는 길</h2>

                {/* Visual Map (Image) */}
                <div className="w-full aspect-video bg-[#eee] mb-8 rounded-lg shadow-md overflow-hidden border border-[#eaeaea]">
                    <div className="w-full h-full bg-[url('/map_placeholder.png')] bg-cover bg-center"></div>
                </div>

                <div className="text-left space-y-8 px-2 mb-12">
                    <div className="border-l-2 border-accent/30 pl-4 py-1">
                        <h3 className="font-serif text-[#222] text-lg mb-2">{locationInfo.name}</h3>
                        <p className="text-[#666] text-sm font-light leading-relaxed">{locationInfo.address}</p>
                    </div>
                    <div className="border-l-2 border-[#ddd] pl-4 py-1">
                        <h3 className="font-medium text-[#444] text-sm mb-1">지하철</h3>
                        <p className="text-[#666] text-sm font-light">{locationInfo.subway}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid gap-3">
                    <a
                        href={locationInfo.mapLinks.naver}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full h-[52px] flex items-center justify-center bg-[#03C75A] text-white rounded-lg text-sm font-medium hover:bg-[#02b351] transition"
                    >
                        네이버 지도로 보기
                    </a>
                    <a
                        href={locationInfo.mapLinks.kakao}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full h-[52px] flex items-center justify-center bg-[#FAE100] text-[#3c1e1e] rounded-lg text-sm font-medium hover:bg-[#eac900] transition"
                    >
                        카카오맵으로 보기
                    </a>
                    <a
                        href={`tel:${locationInfo.phone}`}
                        className="w-full h-[52px] flex items-center justify-center border border-[#ddd] bg-white text-[#444] rounded-lg text-sm font-medium hover:bg-[#f5f5f5] transition mt-2"
                    >
                        <Phone size={16} className="mr-2" />
                        식당에 전화걸기
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Location;

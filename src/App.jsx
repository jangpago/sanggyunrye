import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import Location from './components/Location';
import Closing from './components/Closing';
import { motion } from 'framer-motion';
import { invitationDetails, locationInfo } from './constants';

function App() {
  return (
    <Layout>
      <main className="flex flex-col items-center">
        <Hero />

        <StoryTimeline />

        {/* Invitation Details */}
        <section className="w-full py-24 px-8 text-center bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-serif mb-10 text-accent font-medium">{invitationDetails.title}</h2>
            <div className="space-y-6 text-[#444] font-light leading-relaxed tracking-wide text-sm">
              <p>
                {invitationDetails.description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </p>
              <div className="py-8 my-8 border-y border-[#eee]">
                <p className="text-lg font-serif text-[#222] mb-2">{invitationDetails.date}</p>
                <p className="text-base text-[#666]">{invitationDetails.time}</p>
              </div>
              <p className="font-medium text-[#222]">{locationInfo.name}</p>
            </div>
          </motion.div>
        </section>

        {/* Location Section */}
        <Location />

        {/* Closing Section */}
        <Closing />
      </main>
    </Layout>
  );
}

export default App;

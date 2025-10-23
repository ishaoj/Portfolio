import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations';
import { HiAcademicCap } from 'react-icons/hi';
import { FaCode, FaTrophy } from 'react-icons/fa';

const achievementsData = [
  {
    title: 'Prefinalist at Myntra Hackerramp 2024',
    description: 'Selected among 19000+ participants for innovative fashion-tech solution',
    icon: FaTrophy,
    color: 'text-yellow-400'
  },
  {
    title: 'TCS CodeVita Season 11',
    description: 'All India Rank 1778',
    icon: FaCode,
    color: 'text-accent'
  },
  {
    title: 'Smt. Nirmala Agarwal Memorial Award',
    description: 'Awarded for academic excellence.',
    icon: HiAcademicCap,
    color: 'text-highlight'
  }
];

const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-textPrimary">
            <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="card-surface p-6 rounded-xl transition-smooth hover:shadow-glow cursor-pointer relative overflow-hidden group"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                      <Icon className={`${achievement.color}`} size={28} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-highlight">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-textSecondary font-body leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;


import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations';
import { HiAcademicCap, HiSparkles } from 'react-icons/hi';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    year: '2022 - 2026',
    description: 'Specialized in Artificial Intelligence and Machine Learning with honors in Cybersecurity.',
  },
  {
    degree: 'Intermediate',
    institution: 'City Montessori School, Lucknow',
    year: '2022',
    description: 'Scored 94.5% in ISC Boards.',
  },
  {
    degree: 'High School',
    institution: 'City Montessori School, Lucknow',
    year: '2020',
    description: 'Scored 93.6 in ICSE Boards.',
  }
];

const Education = () => {
  return (
    <section 
      id="education" 
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-highlight opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textPrimary mb-4 inline-block relative"
          >
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                Education
              </span>
              {/* Glowing underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          {/* Decorative sparkles */}
          <div className="flex justify-center gap-4 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Glowing timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-accent opacity-30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-accent via-highlight to-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 pl-20 md:pl-24">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative group"
              >
                {/* Glowing dot indicator */}
                <motion.div
                  className="absolute -left-[3.25rem] md:-left-[3.75rem] top-6 w-4 h-4 rounded-full bg-accent border-2 border-background flex items-center justify-center"
                  whileInView={{ 
                    boxShadow: [
                      '0 0 10px rgba(91, 91, 214, 0.5)',
                      '0 0 20px rgba(91, 91, 214, 0.9)',
                      '0 0 10px rgba(91, 91, 214, 0.5)'
                    ]
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </motion.div>

                {/* Connecting line to card */}
                <div className="absolute -left-12 md:-left-14 top-6 w-8 md:w-10 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>

                {/* Education Card */}
                <motion.div
                  className="card-surface p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(91, 91, 214, 0.4)'
                  }}
                >
                  {/* Background glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    {index === 0 ? (
                      <HiAcademicCap className="text-highlight" size={48} />
                    ) : (
                      <HiSparkles className="text-accent" size={40} />
                    )}
                  </div>

                  <div className="relative z-10">
                    {/* Year badge */}
                    <motion.div
                      className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-4"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(91, 91, 214, 0.6)' }}
                    >
                      <span className="text-accent font-body text-sm font-semibold">
                        {edu.year}
                      </span>
                    </motion.div>

                    {/* Degree */}
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-textPrimary mb-2 leading-tight">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-highlight font-body text-base md:text-lg mb-3 font-medium">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-textSecondary font-body text-base leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* End cap decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute left-8 md:left-12 bottom-0 transform -translate-x-1/2 translate-y-8"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-highlight opacity-60 flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom text decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-textSecondary font-body text-sm italic">
            The journey continues...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

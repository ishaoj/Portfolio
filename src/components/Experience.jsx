import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn } from '../animations';
import { HiCode, HiBriefcase, HiSparkles } from 'react-icons/hi';

const Experience = () => {
  const experience = {
    role: 'Frontend Developer Intern',
    company: 'GiftKart',
    period: 'August 2025 - October 2025',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and optimize performance.',
    responsibilities: [
      'Built responsive user interfaces with React and TailwindCSS',
      'Implemented RESTful APIs using Node.js and Express',
      'Optimized database queries reducing load time by 40%',
      'Participated in code reviews and agile development practices'
    ]
  };

  return (
    <section 
      id="experience" 
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-highlight opacity-5 rounded-full blur-3xl"></div>

      {/* Animated gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textPrimary mb-4 inline-block relative"
          >
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                Experience
              </span>
              {/* Glowing underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight rounded-full blur-sm"
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

        {/* Experience Spotlight Card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-accent via-highlight to-accent rounded-2xl opacity-20 blur-xl"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Main Card */}
          <motion.div
            className="relative bg-surface/70 backdrop-blur-lg border border-accent/30 shadow-glow rounded-2xl p-8 md:p-12 overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(91, 91, 214, 0.6)',
              transition: { duration: 0.3 }
            }}
          >
            {/* Background gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500"></div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent/40 rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-highlight/40 rounded-br-lg"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Header */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <HiBriefcase className="text-accent" size={40} />
                  
                  {/* Orbiting sparkle */}
                  <motion.div
                    className="absolute"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    <HiSparkles 
                      className="text-highlight" 
                      size={16}
                      style={{ 
                        position: 'absolute',
                        top: -30,
                        left: 0
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Role Title */}
              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-textPrimary mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {experience.role}
              </motion.h3>

              {/* Company & Period */}
              <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <HiCode className="text-highlight" size={20} />
                  <span className="text-highlight font-body text-lg font-semibold">
                    {experience.company}
                  </span>
                </div>
                <span className="hidden md:inline text-accent">•</span>
                <span className="text-textSecondary font-body text-base">
                  {experience.period}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-textSecondary font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                {experience.description}
              </motion.p>

              {/* Divider */}
              <motion.div
                className="w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />

              {/* Key Highlights Label */}
              <motion.div
                className="flex items-center justify-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <HiSparkles className="text-accent" size={20} />
                <h4 className="text-lg font-heading font-semibold text-highlight">
                  Key Highlights
                </h4>
                <HiSparkles className="text-accent" size={20} />
              </motion.div>

              {/* Responsibilities Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1
                    }
                  }
                }}
              >
                {experience.responsibilities.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-accent/10 hover:border-accent/30 transition-all duration-300 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      className="text-accent mt-1 flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3
                      }}
                    >
                      ▹
                    </motion.span>
                    <span className="text-textSecondary font-body text-sm md:text-base leading-relaxed group-hover/item:text-textPrimary transition-colors">
                      {resp}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom shine effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="text-textSecondary font-body text-sm italic mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          Building the future, one line of code at a time
        </motion.p>
      </div>
    </section>
  );
};

export default Experience;

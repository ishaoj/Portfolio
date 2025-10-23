import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scaleIn, fadeUp, float, glowPulseAnimation, scrollIndicator, sparkle, titleReveal } from '../animations';
import { HiChevronDown, HiSparkles } from 'react-icons/hi';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface"
        style={{ y: y1 }}
      >
        {/* Diagonal light rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-highlight via-highlight/50 to-transparent transform skew-x-12"></div>
        </div>

        {/* Radial gradient glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-accent opacity-20 rounded-full blur-[120px]"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Decorative top sparkles */}
        <div className="flex justify-center gap-8 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={sparkle}
              initial="initial"
              animate="animate"
            >
              <HiSparkles className="text-highlight" size={20} />
            </motion.div>
          ))}
        </div>

        {/* Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="mb-10"
        >
          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="relative inline-block"
          >
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent opacity-40"
              style={{ padding: '10px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Inner rotating ring - opposite direction */}
            <motion.div
              className="absolute inset-0 rounded-full border border-highlight opacity-60"
              style={{ padding: '5px' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Profile image with animated glow */}
            <motion.div 
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30"
              variants={glowPulseAnimation}
              initial="initial"
              animate="animate"
            >
              <img 
                src="/assets/profile.jpg" 
                alt="Isha Ojha" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%235b5bd6" width="200" height="200"/%3E%3Ctext fill="%23eaeaea" font-size="80" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EIO%3C/text%3E%3C/svg%3E';
                }}
              />
              
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-highlight"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-highlight"></div>
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={titleReveal}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-textPrimary mb-2"
            style={{ lineHeight: 1.2 }}
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-accent animate-gradient-x">
                Isha Ojha
              </span>
              {/* Glow underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-highlight to-accent blur-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle/Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-textSecondary font-body mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          CSE'26 | Artificial Intelligence and Machine Learning Engineer | Cyber Security
        </motion.p>

        {/* Enhanced tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm md:text-base text-textSecondary/80 font-body mb-12 italic"
        >
          Building ideas at the edge of code and design
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-transparent border-2 border-accent rounded-full font-heading font-semibold text-textPrimary overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
            
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(91, 91, 214, 0.3)',
                  '0 0 40px rgba(91, 91, 214, 0.6)',
                  '0 0 20px rgba(91, 91, 214, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <span className="relative z-10 flex items-center gap-2">
              <HiSparkles className="group-hover:rotate-180 transition-transform duration-500" />
              Explore More
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={scrollIndicator}
        initial="initial"
        animate="animate"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center">
          <span className="text-accent text-xs font-body mb-2 tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-2 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <HiChevronDown className="text-accent mt-2" size={20} />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Home;

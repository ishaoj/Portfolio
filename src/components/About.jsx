import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scaleIn, float } from '../animations';
import { HiSparkles, HiLightningBolt, HiCode } from 'react-icons/hi';

const About = () => {
  const skills = [
    { name: 'React', icon: HiCode },
    { name: 'Python', icon: HiCode },
    { name: 'Machine Learning', icon: HiLightningBolt },
    { name: 'FastAPI', icon: HiCode },
    { name: 'UI/UX Design', icon: HiSparkles },
    { name: 'Problem Solving', icon: HiLightningBolt },
    { name: 'TailwindCSS', icon: HiCode },
    { name: 'Cyber Security', icon: HiLightningBolt }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
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
            About{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                Me
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

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="flex justify-center"
          >
            <motion.div 
              className="relative"
              variants={float}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Decorative frame corners */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-highlight opacity-60"></div>
              
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 border border-accent/30 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Image container */}
              <motion.div 
                className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/assets/profile.jpg" 
                  alt="Isha Ojha" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="320"%3E%3Crect fill="%235b5bd6" width="320" height="320"/%3E%3Ctext fill="%23eaeaea" font-size="120" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EIO%3C/text%3E%3C/svg%3E';
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>

              {/* Floating particles around image */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `-${10 + i * 5}px`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - About Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <p className="text-lg md:text-xl leading-relaxed text-textSecondary font-body">
                I'm a{' '}
                <span className="text-accent font-semibold">Computer Science Engineering student</span>{' '}
                with a deep fascination for the intersection of{' '}
                <span className="text-highlight font-semibold">artificial intelligence</span>,{' '}
                elegant code, and human-centered design.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-lg leading-relaxed text-textSecondary font-body">
                My journey began with curiosity about how algorithms shape our digital world. 
                That spark evolved into a passion for building intelligent systems, securing digital spaces, 
                and crafting interfaces that feel intuitive and alive. I believe technology should be both 
                powerful and beautiful — where logic meets art.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-lg leading-relaxed text-textSecondary font-body">
                When I'm not immersed in code, you'll find me exploring{' '}
                <span className="text-accent">machine learning architectures</span>, 
                strengthening{' '}
                <span className="text-highlight">cybersecurity frameworks</span>, 
                or experimenting with design systems that push creative boundaries. 
                I thrive on research-driven projects that challenge conventional thinking.
              </p>
            </motion.div>

            {/* Quote or tagline */}
            <motion.div 
              variants={fadeUp}
              className="border-l-4 border-accent pl-6 py-4 bg-surface/30 rounded-r-xl"
            >
              <p className="text-base italic text-textSecondary font-body">
                "Building the future at the edge of innovation — one algorithm, one design, one breakthrough at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills/Focus Tags */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Section label */}
          <motion.div 
            variants={fadeUp}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-textPrimary mb-2 flex items-center justify-center gap-2">
              <HiSparkles className="text-highlight" />
              Skills & Focus
              <HiSparkles className="text-highlight" />
            </h3>
          </motion.div>

          {/* Skills grid */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: '0 0 25px rgba(91, 91, 214, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 bg-surface/50 border border-accent/30 rounded-full backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-accent overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon className="text-accent group-hover:text-highlight transition-colors" size={18} />
                    <span className="text-textPrimary font-body font-medium text-sm group-hover:text-textPrimary">
                      {skill.name}
                    </span>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

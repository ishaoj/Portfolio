import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations';
import { FaGithub, FaLinkedin, FaEnvelope, FaGitlab } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ishaoj',
      color: 'hover:text-highlight'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/isha-ojha/',
      color: 'hover:text-accent'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:ishaojha41@gmail.com',
      color: 'hover:text-highlight'
    },
    {
      name: 'GitLab',
      icon: FaGitlab,
      url: 'https://gitlab.com/ishaojha41',
      color: 'hover:text-accent'
    }
  ];

  return (
    <footer className="relative py-16 px-6 bg-surface border-t border-accent/20">
      {/* Background effect */}
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center"
        >
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-background flex items-center justify-center text-textPrimary ${social.color} transition-smooth shadow-glow`}
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-32 h-0.5 bg-accent mx-auto mb-6"></div>

          {/* Copyright */}
          <p className="text-textSecondary font-body mb-2">
            Designed & Built by <span className="text-accent font-semibold">Isha</span>
          </p>
          <p className="text-textSecondary font-body text-sm mb-8">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-textPrimary rounded-full font-body font-medium transition-smooth hover:shadow-glow"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <HiArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating orb decoration */}
      <div className="absolute bottom-0 left-10 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-highlight opacity-5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;


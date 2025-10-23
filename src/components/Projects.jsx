import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import GlowingCard from './GlowingCard';

const projectsData = [
  {
    title: 'Fashion Forward',
    description: `AI-powered system that detects Gen Z fashion trends in real-time using CLIP, BERT, and Stable Diffusion. Features trend detection, context understanding, audience segmentation with K-Means clustering, and automated design prototype generation. End-to-end workflow from data scraping to AI-generated designs with interactive Streamlit dashboards.`,
    tech: ['CLIP', 'BERT', 'Stable Diffusion', 'K-Means', 'Streamlit', 'Python', 'Scikit-Learn', 'Pandas'],
    image: 'https://img.youtube.com/vi/oCAtFPc5hzI/maxresdefault.jpg',
    github: 'https://github.com/ishaoj/fashion-forward',
    demo: 'https://www.youtube.com/watch?v=oCAtFPc5hzI'
  },
  {
    title: 'Chat with Multiple PDFs',
    description: `Intelligent document interaction using advanced RAG for seamless multi-document conversations. Built a LlamaIndex processing pipeline, semantic search, Gemini integration for NLU, and a Flask-based chat interface.`,
    tech: ['RAG', 'LlamaIndex', 'Gemini', 'Flask', 'Python'],
    image: 'https://dummyimage.com/1200x675/0f172a/ffffff&text=Chat+with+Multiple+PDFs',
    github: null,
    demo: null
  },
  {
    title: 'Resume Parser',
    description: `Advanced NLP-powered resume analysis with custom NER for field extraction, intelligent skill categorization, REST API integration, and structured output generation using LlamaIndex and Gemini.`,
    tech: ['Gemini', 'LlamaIndex', 'Python', 'NLP', 'REST API'],
    image: 'https://dummyimage.com/1200x675/0f172a/ffffff&text=Resume+Parser',
    github: null,
    demo: null
  },
  {
    title: 'Crop Yield Prediction',
    description: `ML model predicting crop yield with Linear Regression on synthetic agricultural data (R² 0.9596, MSE 0.2390). Identified rainfall as a key factor; implemented scaling and correlation analysis with suggestions for Random Forest and more features.`,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: 'https://dummyimage.com/1200x675/0f172a/ffffff&text=Crop+Yield+Prediction',
    github: null,
    demo: null
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
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
            <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <GlowingCard className="card-surface rounded-xl overflow-hidden transition-smooth hover:shadow-glow cursor-pointer group h-full">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-surface">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                  
                  {/* Animated overlay icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <HiCode className="text-accent" size={48} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-highlight mb-3 flex items-center justify-between">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.span>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <HiCode className="text-accent" size={24} />
                    </motion.div>
                  </h3>
                  
                  <p className="text-textSecondary font-body leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech tags with animation */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        className="px-3 py-1 bg-background rounded-md text-accent border border-accent/30 text-sm font-body"
                        whileHover={{ 
                          scale: 1.1, 
                          borderColor: 'rgba(91, 91, 214, 1)',
                          boxShadow: '0 0 10px rgba(91, 91, 214, 0.5)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links with animation */}
                  <div className="flex gap-4">
                    {project.github ? (
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-textPrimary hover:text-accent transition-smooth font-body"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        <span>Code</span>
                      </motion.a>
                    ) : (
                      <motion.span 
                        className="flex items-center gap-2 text-textSecondary/70 cursor-not-allowed font-body select-none bg-background px-2.5 py-1.5 rounded-md border border-border"
                      >
                        <FaGithub size={20} />
                        <span>Code coming soon</span>
                      </motion.span>
                    )}

                    {project.demo ? (
                      <motion.a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-textPrimary hover:text-highlight transition-smooth font-body"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiExternalLink size={20} />
                        <span>Demo</span>
                      </motion.a>
                    ) : (
                      <motion.span 
                        className="flex items-center gap-2 text-textSecondary/70 cursor-not-allowed font-body select-none bg-background px-2.5 py-1.5 rounded-md border border-border"
                      >
                        <HiExternalLink size={20} />
                        <span>Live Demo coming soon</span>
                      </motion.span>
                    )}
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


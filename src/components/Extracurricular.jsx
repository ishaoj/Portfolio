import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '../animations';
import { HiUsers, HiAcademicCap, HiSparkles, HiLightningBolt, HiMusicNote } from 'react-icons/hi';
import { FaMedal, FaMicrophone, FaPaintBrush, FaTrophy } from 'react-icons/fa';

const Extracurricular = () => {
  const leadershipRoles = [
    {
      title: 'Creative Head',
      organization: 'Google Developer Group On Campus',
      period: '2024-2025',
      description: 'Led the design and branding of all club events, including posters, social media content, and digital assets. Organized and managed campus hackathons and tech events, overseeing creative direction and execution. Managed a team of designers and editors, ensuring timely and high-quality deliverables.',
      icon: HiUsers,
      color: 'accent'
    },
    {
      title: 'Student Council Member',
      organization: 'University',
      period: '2022-2023',
      description: 'Represented student body in decision-making processes, advocating for student interests and representing the voice of the student community. Organized campus events and initiatives.',
      icon: HiAcademicCap,
      color: 'highlight'
    }
  ];

  const achievements = [
    {
      title: 'School Magazine Recognition',
      award: 'Special Mention',
      description: 'Recognized by school founder for exceptional creative contributions to the school magazine.',
      icon: FaPaintBrush,
      color: 'accent'
    },
    {
      title: 'Camel Art Competition',
      award: '2nd Place',
      description: 'Demonstrated artistic excellence in national competition, showcasing creative talent and dedication.',
      icon: HiSparkles,
      color: 'highlight'
    },
    {
      title: 'Athletics Champion',
      award: 'Multiple Medals',
      description: 'Two-time Gold Medalist and Bronze Medalist in school athletics, demonstrating excellence in sports.',
      icon: FaMedal,
      color: 'accent'
    },
    {
      title: 'Cultural Excellence',
      award: '1st Prize',
      description: '1st Prize in Elocution & Singing competitions, showcasing versatility in performing arts.',
      icon: FaMicrophone,
      color: 'highlight'
    }
  ];

  const activities = [
    {
      title: 'Volunteer at Google DevFest 2024',
      description: 'Contributed to creative designs and posters for the event, supporting the tech community.',
      icon: HiLightningBolt
    },
    {
      title: 'Euphony, The Music Club',
      description: 'Exploring creativity through music and digital art. Learning guitar and creating digital illustrations as a creative outlet.',
      icon: HiMusicNote
    }
  ];

  return (
    <section 
      id="extracurricular" 
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-highlight opacity-5 rounded-full blur-3xl"></div>

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
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-textPrimary mb-4"
          >
            Beyond{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">
                Code
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-highlight blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-textSecondary font-body text-lg mt-4"
          >
            Leadership, creativity, and excellence in action
          </motion.p>
        </motion.div>

        {/* Leadership Roles Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <HiUsers className="text-accent" size={32} />
            <h3 className="text-3xl font-heading font-bold text-textPrimary">
              Leadership Roles
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadershipRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: role.color === 'accent' 
                      ? '0 0 30px rgba(91, 91, 214, 0.6)' 
                      : '0 0 30px rgba(0, 255, 209, 0.4)'
                  }}
                  className="card-surface p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${
                    role.color === 'accent' ? 'bg-accent' : 'bg-highlight'
                  } opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${
                        role.color === 'accent' ? 'bg-accent/20' : 'bg-highlight/20'
                      } flex items-center justify-center flex-shrink-0`}>
                        <Icon className={role.color === 'accent' ? 'text-accent' : 'text-highlight'} size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-heading font-semibold text-highlight mb-1">
                          {role.title}
                        </h4>
                        <p className="text-accent font-body text-sm">{role.organization}</p>
                        <p className="text-textSecondary font-body text-xs">{role.period}</p>
                      </div>
                    </div>
                    <p className="text-textSecondary font-body leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaTrophy className="text-highlight" size={32} />
            <h3 className="text-3xl font-heading font-bold text-textPrimary">
              Achievements & Recognition
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ 
                    y: -10,
                    boxShadow: achievement.color === 'accent' 
                      ? '0 0 25px rgba(91, 91, 214, 0.6)' 
                      : '0 0 25px rgba(0, 255, 209, 0.5)'
                  }}
                  className="card-surface p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 text-center group cursor-pointer"
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-full ${
                      achievement.color === 'accent' ? 'bg-accent/20' : 'bg-highlight/20'
                    } flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon 
                      className={achievement.color === 'accent' ? 'text-accent' : 'text-highlight'} 
                      size={32} 
                    />
                  </motion.div>
                  
                  <h4 className="text-lg font-heading font-semibold text-textPrimary mb-2">
                    {achievement.title}
                  </h4>
                  
                  <div className={`inline-block px-3 py-1 rounded-full mb-3 ${
                    achievement.color === 'accent' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-highlight/20 text-highlight'
                  } text-sm font-body font-semibold`}>
                    {achievement.award}
                  </div>
                  
                  <p className="text-textSecondary font-body text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Other Activities Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-8">
            <HiSparkles className="text-accent" size={32} />
            <h3 className="text-3xl font-heading font-bold text-textPrimary">
              Activities & Interests
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="card-surface p-6 rounded-xl border border-accent/20 hover:border-highlight/50 transition-all duration-300 flex items-center gap-6 group"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-highlight" size={32} />
                  </motion.div>
                  
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-highlight mb-2">
                      {activity.title}
                    </h4>
                    <p className="text-textSecondary font-body leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;

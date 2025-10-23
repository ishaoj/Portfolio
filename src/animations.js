// Framer Motion animation variants for smooth, consistent transitions

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  }
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: 'easeOut' 
    } 
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: 'easeOut' 
    } 
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom * 0.2
    }
  })
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: custom * 0.2
    }
  })
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -10, 
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const glowPulse = {
  initial: { boxShadow: '0 0 20px rgba(91, 91, 214, 0.6)' },
  animate: {
    boxShadow: [
      '0 0 20px rgba(91, 91, 214, 0.6)',
      '0 0 30px rgba(91, 91, 214, 0.9)',
      '0 0 20px rgba(91, 91, 214, 0.6)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

export const scaleInOut = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0, y: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1
    }
  }
};

export const slideUpFade = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const pulseScale = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const float = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: 'easeInOut'
    }
  }
};

export const glowPulseAnimation = {
  initial: { 
    boxShadow: '0 0 20px rgba(91, 91, 214, 0.4)' 
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(91, 91, 214, 0.4)',
      '0 0 40px rgba(91, 91, 214, 0.8)',
      '0 0 20px rgba(91, 91, 214, 0.4)'
    ],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

export const scrollIndicator = {
  initial: { y: 0, opacity: 0.6 },
  animate: {
    y: [0, 10, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

export const sparkle = {
  initial: { scale: 0, opacity: 0 },
  animate: (i) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      delay: i * 0.3,
      ease: 'easeInOut'
    }
  })
};

export const titleReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};


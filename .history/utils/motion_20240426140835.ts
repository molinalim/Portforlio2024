export function floating(delay: number) {
  return {
    hidden: {
      y: 20, // Starting position slightly below
      opacity: 0,
    },
    visible: {
      y: 0, // Floating back to the original position
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        y: {
          yoyo: Infinity, // Makes the animation repeat back and forth
          duration: 1, // Duration of each yoyo
          ease: 'easeInOut', // Easing function
        },
      },
    },
  };
}

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

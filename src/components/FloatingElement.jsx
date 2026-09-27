import React from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingElement provides continuous, asynchronous vertical levitation
 * to emulate zero-gravity physics with staggered durations.
 */
export default function FloatingElement({
  children,
  duration = 4.2,
  distance = 6,
  delay = 0,
  rotateRange = 1.2,
  className = '',
  style = {},
  ...props
}) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
        rotate: rotateRange ? [-rotateRange, rotateRange, -rotateRange] : 0,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: delay,
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

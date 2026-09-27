import React from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingElement provides continuous, asynchronous vertical levitation
 * to emulate zero-gravity physics.
 */
export default function FloatingElement({
  children,
  duration = 4,
  distance = 12,
  delay = 0,
  rotateRange = 2,
  className = '',
  style = {},
  ...props
}) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
        rotate: [-rotateRange, rotateRange, -rotateRange],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
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

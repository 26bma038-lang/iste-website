import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/audio';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  strength = 0.35,
  playSound = true,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    if (playSound) sound.playHover();
  };

  const handleClick = (e) => {
    if (playSound) sound.playClick();
    if (onClick) onClick(e);
  };

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none transition-colors ${className}`}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

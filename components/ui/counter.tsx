import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter = ({ end, duration = 2, suffix = '', className = '' }: CounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.5 });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <motion.div 
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString('en-US')}{suffix}
    </motion.div>
  );
};

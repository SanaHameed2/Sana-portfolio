import { motion, useScroll, useSpring } from 'framer-motion';

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[9999] h-1 origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}

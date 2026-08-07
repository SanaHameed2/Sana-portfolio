import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loader() {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
        className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent"
      />
    </motion.div>
  );
}

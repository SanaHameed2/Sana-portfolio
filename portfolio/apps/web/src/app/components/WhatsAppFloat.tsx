import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href="https://wa.me/923402869594"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      initial={{ scale: reduceMotion ? 1 : 0 }}
      animate={{ scale: 1 }}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ duration: reduceMotion ? 0 : 0.25 }}
      className="fixed bottom-24 right-8 z-50 rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-colors duration-DEFAULT hover:bg-[#20b85f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </motion.a>
  );
}

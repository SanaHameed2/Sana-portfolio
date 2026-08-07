import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const reviews = [
  { id: 1, name: 'krislntoronto', rating: 5.0, image: '/reviews/1.png', text: 'Amazing work! Delivered beyond expectations.' },
  { id: 2, name: 'INFOKIND', rating: 5.0, image: '/reviews/2.png', text: 'Professional and highly skilled developer.' },
  { id: 3, name: 'AGACATUK', rating: 5.0, image: '/reviews/3.png', text: 'Great communication and fast delivery.' },
  { id: 4, name: 'AGACATUK', rating: 5.0, image: '/reviews/4.png', text: 'Very satisfied with the results.' },
  { id: 5, name: 'FREEMARKETER1', rating: 4.5, image: '/reviews/5.png', text: 'Good work, will hire again.' },
  { id: 6, name: 'VANTRILOGY', rating: 5.0, image: '/reviews/6.png', text: 'Excellent service and attention to detail.' },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, reduceMotion, nextSlide]);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedImage]);

  const current = reviews[currentIndex];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-surface py-section-mobile md:py-section-tablet lg:py-section-desktop"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-2xl px-8">
        <h2 id="reviews-heading" className="text-center text-3xl font-bold text-neutral-50 sm:text-section-heading">
          Client reviews
        </h2>
        <p className="mt-4 text-center text-body text-neutral-200">What my clients say about my work</p>

        <div className="relative mt-12" role="region" aria-roledescription="carousel" aria-label="Client reviews">
          <AnimatePresence mode="wait">
            <motion.button
              type="button"
              key={currentIndex}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className="block w-full overflow-hidden rounded-card border border-border bg-white/5 text-left backdrop-blur-sm"
              onClick={() => setSelectedImage(current.image)}
              aria-label={`View full review from @${current.name}`}
            >
              <img src={current.image} alt="" className="h-auto w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-neutral-50">@{current.name}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span className="text-small text-neutral-50">{current.rating}</span>
                  </span>
                </div>
                <p className="text-small italic text-neutral-200">"{current.text}"</p>
              </div>
            </motion.button>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-neutral-50 transition-colors duration-DEFAULT hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-neutral-50 transition-colors duration-DEFAULT hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Choose review">
            {reviews.map((r, index) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Review ${index + 1} of ${reviews.length}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-DEFAULT focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                  index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Review image"
          >
            <motion.div
              initial={{ scale: reduceMotion ? 1 : 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                autoFocus
                aria-label="Close"
                className="absolute -top-12 right-0 text-white/70 transition-colors duration-DEFAULT hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <X size={32} />
              </button>
              <img src={selectedImage} alt="Client review, enlarged" className="h-auto w-full rounded-card shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

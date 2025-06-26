// src/components/ScrollingHero.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollingHero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Animation transformations
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 30]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
  const excerptOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const excerptY = useTransform(scrollYProgress, [0.5, 0.7], ["2rem", "0rem"]);
  const imageBrightness = useTransform(scrollYProgress, [0.5, 0.8], ["brightness(100%)", "brightness(30%)"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('public/indian-hero.jpg')`,
            filter: imageBrightness 
          }}
        />

        <motion.div
          style={{ opacity: excerptOpacity, y: excerptY }}
          className="relative z-20 max-w-2xl text-center text-white p-8"
          id="about"
        >
          <h2 className="text-4xl font-serif text-accent mb-4">A Journey of Spice</h2>
          <p className="text-lg text-secondary">
            Helmed by esteemed chef David, join us on a culinary expedition through the vibrant tapestry of Indian cuisine.
          </p>
        </motion.div>

        <motion.h1
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute z-30 text-white font-serif text-8xl md:text-9xl lg:text-[200px] font-bold"
        >
          PARADISE
        </motion.h1>

      </div>
    </section>
  );
}

export default ScrollingHero;

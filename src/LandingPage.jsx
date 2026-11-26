import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Import Modular Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialJusticeDefSection from './components/SocialJusticeDefSection';
import WhyItMattersSection from './components/WhyItMattersSection';
import EducationJusticeSection from './components/EducationJusticeSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ImplementationSection from './components/ImplementationSection';
import ExpectationsSection from './components/ExpectationsSection';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';

// Framer Motion Animation Variants for Scroll Reveals
const sectionFadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic
    },
  },
};

export default function LandingPage() {
  // Scroll Progress Bar using Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-800 font-sans selection:bg-amber-200 selection:text-amber-900 relative">
      
      {/* Framer Motion Scroll Progress Indicator at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-red-600 origin-left z-60"
        style={{ scaleX }}
      />

      {/* Persistent Responsive Navbar */}
      <Navbar />

      {/* Main Content Sections wrapped in Framer Motion scroll animations */}
      <main className="overflow-hidden">
        
        {/* 1. Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionFadeVariant}
        >
          <HeroSection />
        </motion.div>

        {/* 2. Apa itu Keadilan Sosial (Ranah Umum) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <SocialJusticeDefSection />
        </motion.div>

        {/* 3. Mengapa Keadilan Sosial Itu Penting? */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <WhyItMattersSection />
        </motion.div>

        {/* 4. Apa itu Keadilan Sosial dalam Dunia Pendidikan */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <EducationJusticeSection />
        </motion.div>

        {/* 5. Contoh Kasus Nyata di Indonesia (3 Berita Terkini) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <CaseStudiesSection />
        </motion.div>

        {/* 6. Penerapan Keadilan Sosial pada Ranah Pendidikan */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <ImplementationSection />
        </motion.div>

        {/* 7. Harapan Kami Setelah Sosialisasi Ini */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <ExpectationsSection />
        </motion.div>

        {/* 8. Kuis Akhir Interaktif (Wayground Quiz) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionFadeVariant}
        >
          <QuizSection />
        </motion.div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

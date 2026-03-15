import { motion } from 'framer-motion';
import { MousePointer2, Database, Layout } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>I am Thomas Soldwedel</p>
        </motion.div>

        <h1 className="hero-title text-gradient animate-float">
          Fullstack Developer <br />
          <span className="hero-location">based in Berlin.</span>
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building Digital Systems with a Human Focus.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="cta-button primary">
            View my projects <Layout size={18} />
          </a>
          <a href="#about" className="cta-button secondary">
            Discover my journey <MousePointer2 size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

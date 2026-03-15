import { motion } from 'framer-motion';
import { HeartPulse, Activity } from 'lucide-react';
import './AboutHumanElement.css';

export default function AboutHumanElement() {
  return (
    <section id="about" className="about-section container">
      <motion.div
        className="about-container glass glass-hover"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-visuals">
          <div className="pulse-circle">
            <HeartPulse size={48} className="text-accent-light" />
          </div>
          <div className="abstract-shape"></div>
        </div>

        <div className="about-content">
          <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem' }}>
            The Human Element
          </h2>
          <div className="badge-row">
            <span className="badge"><Activity size={14} /> Public Health Studies</span>
            <span className="badge"><HeartPulse size={14} /> Sports Science & Movement Therapy</span>
          </div>

          <div className="bio-text">
            <p>
              My journey into tech isn't conventional. With studies in Public Health and a deep background in Sports Science & Movement Therapy, I spent years understanding how complex human systems function, adapt, and heal. Today, I apply that same analytical rigor and empathy to building software.
            </p>
            <p>
              Through intensive technical training at DCI and ChapterNext, and proven experience as a Technical Consultant at FDM Group, I’ve honed my expertise in the MERN stack—structuring clean, scalable code and thriving in Agile environments.
            </p>
            <p className="highlight-text">
              I don't just write code; I engineer digital solutions designed for real people, solving complex problems with agility, resilience, and a human-centric approach.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

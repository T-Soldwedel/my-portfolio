import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import './ExperienceTimeline.css';

const timelineData = [
  {
    id: 1,
    role: 'Technical Consultant',
    company: 'FDM Group',
    date: 'Recent',
    description: 'Applied MERN stack expertise to build clean, scalable code in Agile environments.',
    icon: <Briefcase size={20} />
  },
  {
    id: 2,
    role: 'Fullstack Web Development Training',
    company: 'DCI & ChapterNext',
    date: 'Intensive Training',
    description: 'Rigorous deep-dive into JavaScript, TypeScript, React.js, Next.js, and backend paradigms.',
    icon: <Code2 size={20} />
  },
  {
    id: 3,
    role: 'Studies in Public Health & Movement Therapy',
    company: 'Academia',
    date: 'Previous Background',
    description: 'Developed profound analytical rigor and empathy, understanding complex human systems to translate into human-centric software.',
    icon: <GraduationCap size={20} />
  }
];

import { Code2 } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="timeline-section container">
      <h2 className="section-title text-gradient">The Journey</h2>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            className="timeline-item glass glass-hover"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.role}</h3>
                <span className="timeline-date"><Calendar size={14} /> {item.date}</span>
              </div>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

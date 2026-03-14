import { motion } from 'framer-motion';
import { Database, Layout, Server, Zap } from 'lucide-react';
import './SkillsBentoBox.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 size={24} className="text-accent" />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    className: 'bento-languages'
  },
  {
    title: 'Frameworks & Libs',
    icon: <Layout size={24} className="text-accent" />,
    skills: ['React.js', 'Next.js', 'Express.js', 'Node.js', 'Tailwind CSS'],
    className: 'bento-frameworks'
  },
  {
    title: 'Databases & Tools',
    icon: <Database size={24} className="text-accent" />,
    skills: ['MongoDB', 'MySQL', 'Git/GitHub', 'Agile (Scrum/Kanban)'],
    className: 'bento-databases'
  }
];

import { Code2 } from 'lucide-react';

export default function SkillsBentoBox() {
  return (
    <section id="skills" className="skills-section container">
      <div className="section-header">
        <h2 className="section-title text-gradient">Technical Arsenal</h2>
        <p className="section-subtitle">A modern MERN stack foundation with focus on scalable web architectures.</p>
      </div>

      <div className="bento-grid">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            className={`bento-item glass glass-hover ${category.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="bento-header">
              <div className="bento-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map(skill => (
                <li key={skill}>
                  <Zap size={14} className="lightning-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import './ProjectsSection.css';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive React and Node.js dashboard for managing products, visualizing sales data, and processing orders.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageType: 'gradient-1'
  },
  {
    id: 2,
    title: 'Health Metrics Tracker',
    description: 'A progressive web app allowing users to log workouts, track macro-nutrients, and visualize fitness progress over time.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    imageType: 'gradient-2'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'A scalable websocket-based chat application featuring room creation, typing indicators, and message history.',
    techStack: ['React', 'Express', 'Socket.io', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    imageType: 'gradient-3'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section container">
      <div className="section-header">
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <p className="section-subtitle">A selection of recent applications I've built to solve real-world problems.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={project.id}
            className="project-card glass glass-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Visual placeholder until screenshots are added */}
            <div className={`project-image-placeholder ${project.imageType}`}>
              <MonitorPlay size={48} className="placeholder-icon" />
              <div className="image-overlay">
                <a href={project.liveUrl} className="overlay-btn" aria-label="View Live Project"><ExternalLink size={20} /> Live</a>
                <a href={project.githubUrl} className="overlay-btn" aria-label="View Source Code"><Github size={20} /> Code</a>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

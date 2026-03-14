import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import SkillsBentoBox from './components/SkillsBentoBox';
import AboutHumanElement from './components/AboutHumanElement';

function App() {
  // Parallax background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      document.body.style.backgroundImage = `
        radial-gradient(circle at ${x * 100}% ${y * 100}%, var(--accent-glow) 0%, transparent 50%),
        radial-gradient(circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, rgba(129, 140, 248, 0.08) 0%, transparent 40%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsBentoBox />
      <AboutHumanElement />

      <footer style={{
        textAlign: 'center',
        padding: '3rem',
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--card-border)',
        marginTop: '4rem'
      }}>
        <p>© {new Date().getFullYear()} Thomas Soldwedel. Building with purpose in Berlin.</p>
      </footer>
    </div>
  );
}

export default App;

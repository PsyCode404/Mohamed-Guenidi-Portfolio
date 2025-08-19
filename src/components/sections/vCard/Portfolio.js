import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../ui/Card';

// Project images
// Using direct paths from public directory
const GexfmeImage = '/projects/gexfme.png';
const WyzerImage = '/projects/wyzer.png';
const MindmateImage = '/projects/mindmate.png';
const BlogImage = '/projects/blog.png';
const TechByteImage = '/projects/techbyte.png';
const PortfolioImage = '/projects/Portfolio.png';

const Portfolio = () => {
  
  // Portfolio data
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      category: 'Personal Portfolio Website',
      githubLink: 'https://github.com/PsyCode404/Mohamed-Guenidi-Portfolio',
      liveDemo: '',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion' , 'Botpress'],
      image: PortfolioImage
    },
    {
      id: 2,
      title: 'GexFME',
      category: ' CAD File Management & Analysis Platform',
      githubLink: 'https://github.com/PsyCode404/GexFME',
      liveDemo: 'https://gexfme.onrender.com/',
      technologies: ['React', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'Ant Design', 'PrimeReact'],
      image: GexfmeImage
    },
    {
      id: 3,
      title: 'Wyzer',
      category: 'Personal Finance Tracker',
      githubLink: 'https://github.com/PsyCode404/Wyzer',
      liveDemo: 'https://wyzer.onrender.com/',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Recharts'],
      image: WyzerImage
    },
    {
      id: 4,
      title: 'MindMate',
      category: 'Mental Wellness Tracker and Support Platform',
      githubLink: 'https://github.com/PsyCode404/MindMate',
      liveDemo: 'https://mindmate-production-2d9e.up.railway.app/',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      image: MindmateImage
    },
    {
      id: 4,
      title: 'Blog Web App',
      category: 'A clean space to write and publish.',
      githubLink: 'https://github.com/PsyCode404/Blog-Web-App',
      liveDemo: 'https://blog-web-app-xol4.onrender.com/',
      technologies: ['Node.js', 'Express', 'EJS', 'Bootstrap', 'Body-Parser'],
      image: BlogImage
    },
    {
      id: 5,
      title: 'TechByte',
      category: 'Shop your favorites in one place.',
      githubLink: 'https://github.com/raptor-xii/TechByte',
      liveDemo: '',
      technologies: ['React', 'Next.js', 'Medusa', 'HTML', 'CSS'],
      image: TechByteImage
    }
  ];


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain bg-cardBackground"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="text-accent text-sm mb-3">{project.category}</span>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-cardBackground text-textPrimary rounded text-xs border border-cardBorder">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <div className="flex gap-3">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-full border border-accent transition-all duration-300"
                  >
                    <span className="text-sm">GitHub</span>
                  </a>
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-cardBackground hover:bg-card-hover text-textPrimary text-sm font-medium rounded-full border border-cardBorder transition-all duration-300"
                    >
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;

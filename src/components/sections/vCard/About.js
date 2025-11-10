import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../ui/Card';

const About = () => {
  // Services data
  const services = [
    { title: 'Web Development', description: 'Creating responsive websites with modern technologies' },
    { title: 'UI/UX Design', description: 'Designing intuitive user interfaces and experiences' },
    { title: 'AI Logic & Algorithms', description: 'AI, algorithms, and data for smarter problem-solving.' },
    { title: 'Consulting', description: 'Providing technical advice and solutions' }
  ];



  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Personal Introduction */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6 relative pb-2">About Me</h2>
        <Card>
          <p className="text-lg text-textPrimary">
            Hello! I'm <span className="font-semibold text-accent">Mohamed Guenidi</span>, a passionate computer science student and creative developer with a keen interest in building digital experiences that are both functional and human-centered.
          </p>
          <p className="mt-4 text-textSecondary">
            My journey in technology began with a curiosity about how digital tools shape our daily lives. This curiosity evolved into a passion for creating intuitive, accessible, and visually appealing applications that solve real problems.
          </p>
          <p className="mt-4 text-textSecondary">
            When I'm not coding, you can find me volunteering with local organizations, exploring new technologies, or collaborating with fellow developers on innovative projects.
          </p>
        </Card>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6 relative pb-2">What I'm Doing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-accent">
                  {index === 0 && '💻'}
                  {index === 1 && '🎨'}
                  {index === 2 && '🤖'}
                  {index === 3 && '💡'}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">{service.title}</h3>
                  <p className="text-textSecondary">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CV Section */}
      <div>
        <Card className="py-4 px-4">
          <p className="text-textPrimary mb-3">If you'd like to know more about my background and experience, you can view my CV here.</p>
          <a 
            href={`/Mohamed_Guenidi_Cv.pdf?v=${Date.now()}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-md transition-all duration-300"
          >
            View CV
          </a>
        </Card>
      </div>

      {/* Portfolio Bot Section */}
      <div>
        <Card className="text-center py-4 px-3">
          <p className="text-textSecondary text-sm">
            💬 Got questions? Ask my portfolio bot , it knows all my skills, projects, and fun facts!
          </p>
          <button 
            className="mt-3 text-accent text-sm font-medium hover:underline"
            onClick={() => window.botpressWebChat?.sendEvent({ type: 'show' })}
          >
            Chat with Bot →
          </button>
        </Card>
      </div>

    </motion.section>
  );
};

export default About;

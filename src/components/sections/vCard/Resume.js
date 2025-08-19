import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../ui/Card';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiNextdotjs, SiEjs, SiTailwindcss, SiNodedotjs, SiPhp, SiFlask, SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiGit, SiGithub, SiDocker, SiPostman, SiAmazons3 } from 'react-icons/si';

const Resume = () => {
  // Experience data
  const experiences = [
    {
      period: 'june 2025',
      role: 'Web Developer Intern',
      company: 'Gexpertise ',
      description: 'Full‑stack app for managing DXF files, calculating surfaces, and generating reports with role-based dashboards.',
      technologies: ['React', 'JavaScript', 'Flask', 'PostgreSQL', 'ezdxf', 'Shapely', 'openpyxl']

    },
    {
      period: 'june 2024',
      role: 'Intership',
      company: 'STB bank',
      description: 'Gained professional experience while enhancing soft skills, teamwork, and customer communication.',
    },
    {
      period: '2023 - 2024',
      role: 'IEEE Member',
      company: 'IEEE – TSYP 11',
      description: 'Active member of IEEE, gaining valuable learning and teamwork experience. Served as part of the organizing committee for TSYP 11, the largest annual congress in Tunisia, coordinating logistics and welcoming international guests from around the world.',
    }
  ];

  // Education data
  const education = [
    {
      period: '2023 - Present ',
      degree: 'Bachelor in Computer Science',
      institution: 'Institut Supérieur d\'Informatique et des Technologies de Communication de Hammam Sousses',
      description: 'Focused on web development, software engineering, algorithms, and digital design. Currently ranked among the top students in the section.'
    },
    {
      period: '2023',
      degree: 'Science Baccalaureate',
      institution: 'High School of Jemmal',
      description: 'Graduated with mention and a 15.01 mark.'
    }
  ];

  // Skills data with logos
  const skills = [
    { category: 'Frontend', items: [
      { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
      { name: 'React', icon: <SiReact className="text-blue-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'EJS', icon: <SiEjs className="text-red-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> }
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'PHP', icon: <SiPhp className="text-indigo-600" /> },
      { name: 'Flask', icon: <SiFlask className="text-black" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> }
    ]},
    { category: 'Tools & Deployment', items: [
      { name: 'Git', icon: <SiGit className="text-orange-700" /> },
      { name: 'GitHub', icon: <SiGithub className="text-black" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-600" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'S3 Storage', icon: <SiAmazons3 className="text-orange-400" /> }
    ]}
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-br from-accent to-accentSecondary text-white rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-textPrimary">{item.role}</h3>
                    <p className="font-medium text-accent mt-1">{item.company}</p>
                    <p className="mt-3 text-textSecondary">{item.description}</p>
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-br from-cardBorder to-cardBackground text-accent rounded-full text-sm border border-cardBorder"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6">🎓 Education</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-br from-accent to-accentSecondary text-white rounded-full text-sm font-medium">
                      {item.period}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-textPrimary">{item.degree}</h3>
                    <p className="font-medium text-accent mt-1">{item.institution}</p>
                    <p className="mt-3 text-textSecondary">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volunteering Section */}
      <div>
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Volunteering</h2>
        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-br from-accent to-accentSecondary text-white rounded-full text-sm font-medium">
                    Turkey, july-august 2024
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-textPrimary">Blueprint Project</h3>
                  <p className="font-medium text-accent mt-1">AIESEC</p>
                  <p className="mt-3 text-textSecondary">
                    Participated in a global volunteer program focused on sustainable development and cultural exchange. 
                    Worked on community development projects while experiencing Turkish culture and building international connections.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-br from-accent to-accentSecondary text-white rounded-full text-sm font-medium">
                    2023 - Present
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-textPrimary">Active Volunteer</h3>
                  <p className="font-medium text-accent mt-1">Tunisian Red Crescent – University Chapter</p>
                  <p className="mt-3 text-textSecondary">
                    Active member since 2023, participating in various charity and philanthropic activities. Continuously engaged in community service initiatives and humanitarian efforts, contributing to social impact and community development.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h2 className="text-xl font-bold text-textPrimary mb-4">Certifications</h2>
        <div className="space-y-3">
          <div className="bg-cardBackground border border-cardBorder rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-start gap-3">
              <div className="md:w-1/4">
                <span className="inline-block px-2 py-1 bg-accent text-white rounded-full text-xs font-medium">
                  December 4th 2024.
                </span>
              </div>
              <div className="md:w-3/4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-textPrimary">Responsive Web Design</h3>
                    <p className="font-medium text-accent mt-1">FreeCodeCamp</p>
                  </div>
                  <a
                    href="https://www.freecodecamp.org/certification/fcc8603a170-83ff-4e84-95b2-94cf0e1c0ed7/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-accent hover:bg-accentHover text-white text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cardBackground border border-cardBorder rounded-lg p-4">
            <div className="flex flex-col md:flex-row md:items-start gap-3">
              <div className="md:w-1/4">
                <span className="inline-block px-2 py-1 bg-accent text-white rounded-full text-xs font-medium">
                  August 26th 2024.
                </span>
              </div>
              <div className="md:w-3/4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-textPrimary">Leadership Experience Certificate</h3>
                    <p className="font-medium text-accent mt-1">AIESEC</p>
                  </div>
                  <a
                    href="https://gis-production-eu.s3.eu-west-1.amazonaws.com/j7aymkfvml6q7x0sq3fje1ks3qdm?response-content-disposition=inline%3B%20filename%3D%22application_6670951.pdf%22%3B%20filename%2A%3DUTF-8%27%27application_6670951.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4WY26CMR3JRJCAGE%2F20250816%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250816T121813Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=585790edab1c5ca777e952fabd10e023e302aa2a92970b6ef31bc3d33e0c7079"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-accent hover:bg-accentHover text-white text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h2 className="text-xl font-bold text-textPrimary mb-4">Soft Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Leadership
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Teamwork
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Communication
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Adaptability
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Problem-Solving
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Initiative
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Critical Thinking
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Time Management
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Creative Thinking
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Emotional Intelligence
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Conflict Resolution
          </span>
          <span className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder">
            Strategic Planning
          </span>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-xl font-bold text-textPrimary mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-cardBackground border border-cardBorder rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-textPrimary mb-3">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-cardBackground text-textPrimary rounded-full text-sm border border-cardBorder flex items-center gap-2"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;

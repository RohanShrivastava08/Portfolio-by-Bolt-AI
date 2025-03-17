import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Database, Server, Lock, Cpu, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern web technologies",
      techs: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Database size={24} />,
      title: "Backend Integration",
      description: "Experience with RESTful APIs and database management",
      techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Terminal size={24} />,
      title: "Development Tools",
      description: "Proficient with modern development workflows",
      techs: ["Git", "Docker", "Webpack", "Vite"]
    },
    {
      icon: <Cpu size={24} />,
      title: "Performance Optimization",
      description: "Expertise in web performance and optimization",
      techs: ["Lighthouse", "WebVitals", "PWA", "Service Workers"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg blur opacity-25"
                animate={{
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Frontend Developer & UI Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With a passion for creating exceptional user experiences, I specialize in
                  building modern web applications using cutting-edge technologies. My expertise
                  lies in React ecosystem, with a strong focus on performance and scalability.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm constantly exploring new technologies and methodologies to stay at the
                  forefront of web development. My goal is to create applications that not
                  only meet technical requirements but also provide intuitive and engaging
                  user experiences.
                </p>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-4 mt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "Git", "REST APIs"].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800 rounded-lg px-4 py-2 text-center text-gray-300 border border-gray-700 hover:border-rose-500 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-slate-800 p-6 rounded-xl border border-gray-700 hover:border-rose-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-500/10 text-rose-500 rounded-lg group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                    <p className="text-gray-400 mb-3">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-slate-700 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Led development of enterprise applications using React and Node.js. Managed team of 5 developers and implemented CI/CD pipelines."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects. Implemented responsive designs and optimized application performance."
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2018 - 2020",
    description: "Worked on frontend development using React and TypeScript. Collaborated with designers to implement pixel-perfect UIs."
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-full bg-rose-200"></div>
              )}
              <div className="relative">
                <motion.div 
                  className="absolute left-0 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                >
                  <Briefcase size={14} className="text-white" />
                </motion.div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-rose-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
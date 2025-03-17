import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456"
  },
  {
    title: "Professional Full Stack Developer",
    organization: "Meta",
    date: "2023",
    credentialId: "META-789012"
  },
  {
    title: "Google Cloud Professional Developer",
    organization: "Google",
    date: "2022",
    credentialId: "GCP-345678"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-slate-50" id="certifications">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
                  <p className="text-rose-600">{cert.organization}</p>
                  <p className="text-sm text-gray-500 mt-1">Issued {cert.date}</p>
                  <p className="text-sm text-gray-500">Credential ID: {cert.credentialId}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
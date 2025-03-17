import React from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const floatingIcons = [
    { icon: <Code2 size={24} />, delay: 0 },
    { icon: <Terminal size={24} />, delay: 0.2 },
    { icon: <Cpu size={24} />, delay: 0.4 }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-rose-500/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-rose-500/30"
            style={{
              left: `${(index + 1) * 25}%`,
              top: '20%'
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-rose-500/10 rounded-full text-rose-400 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <span className="animate-pulse">Available for Work</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-rose-500">Rohan Shrivastava</span>
          </motion.h1>
          
          <motion.div
            className="relative inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-300"
              animate={{ 
                background: ["linear-gradient(45deg, #ff6b6b 0%, #ff8e8e 100%)", 
                           "linear-gradient(45deg, #ff8e8e 0%, #ff6b6b 100%)"] 
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Frontend Developer | React Expert | UI Engineer
            </motion.p>
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-rose-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com"
              className="p-3 bg-white/10 backdrop-blur-lg text-white rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="p-3 bg-white/10 backdrop-blur-lg text-white rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              className="p-3 bg-white/10 backdrop-blur-lg text-white rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-rose-500 rounded-full blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full opacity-30 blur-xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img 
              src="/hero-image.png" 
              alt="Professional Portrait" 
              className="w-80 h-80 object-cover rounded-full shadow-2xl relative z-10 border-4 border-rose-500/20"
            />
            
            {/* Tech stack orbit */}
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: Math.cos(index * (Math.PI / 4)) * 150,
                  y: Math.sin(index * (Math.PI / 4)) * 150,
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -index
                }}
              >
                <Code2 size={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
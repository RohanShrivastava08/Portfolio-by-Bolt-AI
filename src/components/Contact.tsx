import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900" id="contact">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
                  <p className="text-gray-300">
                    I'm always open to discussing new projects, creative ideas or
                    opportunities to be part of your visions.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-rose-500/10 text-rose-500 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Mail</p>
                    <p className="text-white">rohan@example.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-rose-500/10 text-rose-500 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-rose-500/10 text-rose-500 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
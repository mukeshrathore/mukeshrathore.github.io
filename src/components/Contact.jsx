import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-2">06. Contact</p>
          <h2 className="section-title text-slate-900 dark:text-white mb-4">Don't hesitate to contact me!</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">Check my social media and feel free to reach out. I'm always open to discussing new projects and opportunities.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-accent-600 dark:text-accent-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Reach out</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center">
                  <MapPin className="text-accent-600 dark:text-accent-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-600 dark:hover:text-white transition-all hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-medium shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40 transition-all hover:-translate-y-0.5"
            >
              <Send size={18} /> Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

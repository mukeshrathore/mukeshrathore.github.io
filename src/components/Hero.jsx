import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400/20 dark:bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-700/40 text-accent-700 dark:text-accent-300 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent-600 to-blue-500 dark:from-accent-400 dark:to-blue-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-medium shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40 transition-all hover:-translate-y-0.5"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-5"
          >
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="Twitter">
              <Twitter size={22} />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 ml-2">
              <MapPin size={16} /> {profile.location}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-slate-400 dark:text-slate-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

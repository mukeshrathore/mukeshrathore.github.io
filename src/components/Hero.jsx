import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Hero() {
  const startYear = 2009
  const yearsExp = Math.floor((new Date() - new Date(startYear, 0)) / (1000 * 60 * 60 * 24 * 365))

  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 dark:from-accent-950 dark:via-accent-900 dark:to-primary-950" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(54,169,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(228,132,58,0.2) 0%, transparent 50%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-12 items-center pt-20 pb-16">
        <div className="lg:col-span-7 text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-primary-100 mb-6 border border-white/10"
          >
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 mb-4 font-light"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-200 text-lg mb-8 max-w-xl leading-relaxed"
          >
            {profile.aboutDetail}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-800 rounded-xl font-semibold hover:bg-primary-50 transition-all hover:scale-105 shadow-lg"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 mt-10 text-primary-200"
          >
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Charlotte, NC
            </div>
            <div className="text-sm">
              <span className="text-3xl font-bold text-white">{yearsExp}+</span> Years Experience
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl" />
            <img
              src="/assets/img/avatar-default.jpg"
              alt={profile.name}
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </motion.a>
    </section>
  )
}

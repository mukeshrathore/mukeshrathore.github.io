import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-accent-50 dark:bg-accent-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Portfolio</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-accent-900 dark:text-white mb-16">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-sm border border-accent-100 dark:border-accent-700 ${project.span}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Project</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl">{project.title}</h3>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-accent-900 md:hidden">
                <h3 className="font-display font-semibold text-accent-900 dark:text-white">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

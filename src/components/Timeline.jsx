import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '../data/portfolio.js'

export default function Timeline() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-accent-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Experience</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-accent-900 dark:text-white mb-16">
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent-200 dark:bg-accent-700 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            const isEducation = item.title.includes('Bachelor')
            const Icon = isEducation ? GraduationCap : Briefcase

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center mb-8 ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{item.date}</span>
                  <h3 className="font-display font-semibold text-lg text-accent-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-accent-500 dark:text-accent-400 text-sm">{item.org}</p>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-accent-900 border-2 border-primary-500 flex items-center justify-center z-10">
                  <Icon className="text-primary-600 dark:text-primary-400" size={16} />
                </div>

                <div className="ml-14 md:hidden">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{item.date}</span>
                  <h3 className="font-display font-semibold text-lg text-accent-900 dark:text-white">{item.title}</h3>
                  <p className="text-accent-500 dark:text-accent-400 text-sm">{item.org}</p>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

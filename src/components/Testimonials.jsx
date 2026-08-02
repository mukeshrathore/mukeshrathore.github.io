import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white dark:bg-accent-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Testimonials</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-accent-900 dark:text-white mb-16">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col"
            >
              <Quote className="text-primary-200 dark:text-primary-800 mb-4" size={32} />
              <p className="text-accent-600 dark:text-accent-300 leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-accent-100 dark:border-accent-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-accent-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-accent-400 dark:text-accent-500 text-xs">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Code2, Layers, Users } from 'lucide-react'
import { profile, specialties, hobbies } from '../data/portfolio.js'

const icons = [Code2, Layers, Users]

export default function About() {
  return (
    <section id="profile" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Profile</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-accent-600 max-w-3xl leading-relaxed mb-16">
            {profile.aboutDetail} I specialize in building enterprise-grade web applications with a strong
            focus on user experience, performance, and maintainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {specialties.map((spec, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-accent-900 mb-2">
                  {spec.title}
                </h3>
                <p className="text-accent-500 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-medium text-accent-400">Hobbies:</span>
          {hobbies.map((h) => (
            <span
              key={h.name}
              className="px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-medium border border-accent-100"
            >
              {h.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-2">04. Testimonials</p>
          <h2 className="section-title text-slate-900 dark:text-white mb-4">Look at their opinions!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">What colleagues and partners say about working with me.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 flex flex-col"
            >
              <Quote className="text-accent-500 dark:text-accent-400 mb-4 flex-shrink-0" size={32} />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

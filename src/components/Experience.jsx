import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-2">02. Career</p>
          <h2 className="section-title text-slate-900 dark:text-white mb-12">Education & Jobs</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />

          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} mb-12 last:mb-0`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-600 dark:bg-accent-400 ring-4 ring-slate-50 dark:ring-slate-950 z-10" />

              {/* Card */}
              <div className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] card p-6 hover:shadow-xl transition-shadow ${i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 text-sm font-mono mb-2">
                  <Briefcase size={16} />
                  {job.period}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{job.company}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

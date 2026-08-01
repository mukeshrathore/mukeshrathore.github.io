import { motion } from 'framer-motion';
import { Building2, LayoutGrid as Layout, Users, Camera, Plane, BookOpen, Code as Code2 } from 'lucide-react';
import { skills, hobbies, specialities } from '../data/portfolioData';

const iconMap = {
  Building2, Layout, Users, Camera, Plane, BookOpen, Code2,
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-2">01. About Me</p>
          <h2 className="section-title text-slate-900 dark:text-white mb-12">Skills & Abilities</h2>
        </motion.div>

        {/* Speciality cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-accent-600 dark:text-accent-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technologies I work with</h3>
          <div className="flex flex-wrap gap-2">
            {specialities.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono font-medium border border-slate-200 dark:border-slate-700/50 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hobbies.map((hobby, i) => {
              const Icon = iconMap[hobby.icon] || Code2;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
                >
                  <Icon className="text-accent-600 dark:text-accent-400" size={20} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{hobby.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

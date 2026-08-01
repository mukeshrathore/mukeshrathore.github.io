import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { posts } from '../data/portfolioData';

export default function Posts() {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent-600 dark:text-accent-400 font-mono text-sm font-medium mb-2">05. Blog</p>
          <h2 className="section-title text-slate-900 dark:text-white mb-12">Latest Posts</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden group hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 text-xs font-mono font-medium text-accent-700 dark:text-accent-300 backdrop-blur-sm">
                  {post.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-start justify-between gap-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {post.title}
                  <ArrowUpRight size={18} className="flex-shrink-0 mt-1 text-slate-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

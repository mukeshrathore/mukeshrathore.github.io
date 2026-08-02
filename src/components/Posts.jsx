import { motion } from 'framer-motion'
import { Clock, Tag, ArrowRight } from 'lucide-react'
import { posts } from '../data/portfolio.js'

export default function Posts() {
  return (
    <section id="posts" className="py-24 lg:py-32 bg-accent-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Latest Posts</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-accent-900 mb-16">
            Articles & Tutorials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group flex flex-col p-0 overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-accent-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={12} /> {post.tags}
                  </span>
                </div>
                <span className="text-xs text-accent-400 mb-2">{post.date}</span>
                <h3 className="font-display font-semibold text-lg text-accent-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-accent-500 text-sm leading-relaxed flex-1 mb-4">
                  {post.summary}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

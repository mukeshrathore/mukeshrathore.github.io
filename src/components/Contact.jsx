import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(54,169,246,0.4) 0%, transparent 60%)'
      }} />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400 mb-12">
            Contact
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-primary-200 text-lg mb-16 max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-primary-300 uppercase tracking-wide">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-primary-100">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-primary-300 uppercase tracking-wide">Location</p>
                <p className="font-medium">{profile.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-primary-300 focus:outline-none focus:border-primary-400 transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-primary-300 focus:outline-none focus:border-primary-400 transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-primary-300 focus:outline-none focus:border-primary-400 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sent}
              className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {sent ? (
                <>
                  <CheckCircle size={18} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

import { Linkedin, Twitter, Github } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="bg-primary-950 dark:bg-accent-950 border-t border-white/5 dark:border-accent-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-300 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-primary-200 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-primary-200 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-primary-200 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} {profile.name}. Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React &amp; Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

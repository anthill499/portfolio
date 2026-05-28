import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About',      href: '#about'     },
  { label: 'Experience', href: '#resume'     },
  { label: 'Education',  href: '#education'  },
  { label: 'Projects',   href: '#projects'   },
]

export function Navbar({ isDark, toggleDark }) {
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        heroVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
        >
          <span className="text-lg leading-none">🖥️</span>
          <span className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3] group-hover:opacity-60 transition-opacity">
            Anthony Huang
          </span>
        </a>
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
        </div>
      </div>
    </nav>
  )
}

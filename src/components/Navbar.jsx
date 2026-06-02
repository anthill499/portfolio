import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About',      href: '#about'     },
  { label: 'Experience', href: '#resume'     },
  { label: 'Education',  href: '#education'  },
  { label: 'Projects',   href: '#projects'   },
]

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Navbar({ isDark, toggleDark }) {
  const [heroVisible, setHeroVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting)
        setMobileMenuOpen(false)
        setSidebarOpen(false)
      },
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      {/* ── Top nav (hero only) ─────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          heroVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="text-lg leading-none">🖥️</span>
            <span className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3] group-hover:opacity-60 transition-opacity">
              Anthony Huang
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-md text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-colors"
            >
              {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-[#E9E9E7] dark:border-[#3A3A3A] bg-[#ffffff]/85 dark:bg-[#242424]/85 backdrop-blur-md px-2 py-2 flex flex-col">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Floating trigger (non-hero pages) ───────────────────── */}
      <button
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
        className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#E9E9E7] dark:border-[#3A3A3A] bg-[#ffffff]/85 dark:bg-[#242424]/85 backdrop-blur-md shadow-sm text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] transition-all duration-500 ${
          !heroVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <HamburgerIcon />
        <span className="text-xs font-semibold hidden sm:inline">Menu</span>
      </button>

      {/* ── Sidebar backdrop ─────────────────────────────────────── */}
      <div
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] transition-all duration-300 ${
          sidebarOpen
            ? 'bg-black/25 dark:bg-black/50 pointer-events-auto'
            : 'bg-transparent pointer-events-none'
        }`}
      />

      {/* ── Sidebar panel ────────────────────────────────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[60] flex flex-col transition-transform duration-300 ease-out bg-[#ffffff]/90 dark:bg-[#242424]/90 backdrop-blur-xl border-l border-[#E9E9E7] dark:border-[#3A3A3A] ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E9E9E7] dark:border-[#3A3A3A]">
          <a
            href="#hero"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2.5 group"
          >
            <span className="text-lg leading-none">🖥️</span>
            <span className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3] group-hover:opacity-60 transition-opacity">
              Anthony Huang
            </span>
          </a>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="p-1.5 rounded-md text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-colors"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Sidebar links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Sidebar footer: theme toggle */}
        <div className="flex items-center justify-between px-6 py-5 border-t border-[#E9E9E7] dark:border-[#3A3A3A]">
          <span className="text-xs text-[#9B9B9B] font-medium">Theme</span>
          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
        </div>
      </div>
    </>
  )
}

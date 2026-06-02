import { FadeInSection } from './FadeInSection'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack web app for real-time team collaboration. Concurrent editing and instant sync across all connected clients.',
    techStack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    githubUrl: '#',
    demoUrl: '#',
    emoji: '🚀',
    headerColor: 'violet',
  },
  {
    title: 'Project Beta',
    description:
      'A CLI tool that automates repetitive dev tasks and scaffolds new projects from custom templates with a single command.',
    techStack: ['Python', 'Click', 'Jinja2'],
    githubUrl: '#',
    demoUrl: '#',
    emoji: '⚡',
    headerColor: 'teal',
  },
  {
    title: 'Project Gamma',
    description:
      'A streaming metrics dashboard with real-time charts, histograms, and configurable alerts for production systems.',
    techStack: ['TypeScript', 'D3.js', 'Redis', 'Docker'],
    githubUrl: '#',
    demoUrl: '#',
    emoji: '📊',
    headerColor: 'amber',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen flex items-center justify-center bg-[#f6f5f4] dark:bg-[#191919] px-4 sm:px-8 py-20 sm:py-24"
    >
      <div className="max-w-4xl w-full mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#7C3AED] dark:bg-[#A78BFA]" />
            <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] font-medium">
              Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3]">
            Things I've built
          </h2>
        </FadeInSection>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 100}>
              <ProjectCard {...project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

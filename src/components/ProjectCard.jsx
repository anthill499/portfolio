import { chipColors, techColorMap } from '../utils/colors'

export function ProjectCard({ title, description, techStack, githubUrl, demoUrl, emoji, headerColor }) {
  const headerBg = {
    violet: 'bg-[#7C3AED]',
    teal:   'bg-[#0D9488]',
    amber:  'bg-[#D97706]',
  }

  return (
    <div className="border border-[#E9E9E7] dark:border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col bg-white dark:bg-[#242424] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 h-full">
      <div className={`${headerBg[headerColor]} px-6 py-5 flex items-center justify-between`}>
        <span className="text-2xl select-none">{emoji}</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-[#191919] dark:text-[#F7F6F3] text-base">{title}</h3>
          <p className="mt-2 text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map(tech => (
            <span
              key={tech}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${chipColors[techColorMap[tech] ?? 'gray']}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-3 border-t border-[#E9E9E7] dark:border-[#2A2A2A] mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] transition-colors"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  )
}

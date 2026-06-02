import { chipColors, techColorMap } from '../utils/colors'

const accentStyles = {
  violet: {
    stripe:  'bg-[#7C3AED]',
    iconBox: 'bg-[#F5F3FF] dark:bg-[#2D1B69]',
  },
  teal: {
    stripe:  'bg-[#0D9488]',
    iconBox: 'bg-[#F0FDFA] dark:bg-[#042F2E]',
  },
  amber: {
    stripe:  'bg-[#D97706]',
    iconBox: 'bg-[#FFFBEB] dark:bg-[#451A03]',
  },
}

export function ProjectCard({ title, description, techStack, githubUrl, demoUrl, emoji, headerColor }) {
  const accent = accentStyles[headerColor] ?? accentStyles.violet

  return (
    <div className="border border-[#E9E9E7] dark:border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col bg-[#ffffff] dark:bg-[#242424] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
      {/* Thin accent stripe */}
      <div className={`h-[3px] w-full ${accent.stripe}`} />

      <div className="p-6 flex flex-col gap-5 flex-1">
        {/* Emoji icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl select-none ${accent.iconBox}`}>
          {emoji}
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-[#191919] dark:text-[#F7F6F3] text-base leading-snug">{title}</h3>
          <p className="mt-2 text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map(tech => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${chipColors[techColorMap[tech] ?? 'gray']}`}
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

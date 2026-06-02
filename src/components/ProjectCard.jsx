import { chipColors, techColorMap } from '../utils/colors'

const accentStyles = {
  violet: {
    gradient: 'from-[#6D28D9] to-[#3B0764]',
    button:   'bg-[#7C3AED] hover:bg-[#6D28D9]',
  },
  teal: {
    gradient: 'from-[#0D9488] to-[#134E4A]',
    button:   'bg-[#0D9488] hover:bg-[#0F766E]',
  },
  amber: {
    gradient: 'from-[#D97706] to-[#78350F]',
    button:   'bg-[#D97706] hover:bg-[#B45309]',
  },
}

export function ProjectCard({ title, description, techStack, githubUrl, demoUrl, emoji, headerColor }) {
  const accent = accentStyles[headerColor] ?? accentStyles.violet

  return (
    <div className="group border border-[#E9E9E7] dark:border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col bg-[#ffffff] dark:bg-[#242424] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">

      {/* Gradient header with dot-grid overlay and large emoji */}
      <div className={`relative bg-gradient-to-br ${accent.gradient} h-36 shrink-0 flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />
        <span className="relative text-5xl select-none">{emoji}</span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-[#191919] dark:text-[#F7F6F3] text-lg leading-snug">{title}</h3>
          <p className="mt-2 text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">{description}</p>
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

        {/* CTA buttons */}
        <div className="flex gap-2.5 mt-auto pt-4 border-t border-[#E9E9E7] dark:border-[#2A2A2A]">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg border border-[#E9E9E7] dark:border-[#2A2A2A] text-sm font-medium text-[#6B6B6B] dark:text-[#9B9B9B] hover:border-[#7C3AED] dark:hover:border-[#A78BFA] hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 rounded-lg text-sm font-semibold text-white transition-colors ${accent.button}`}
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  )
}

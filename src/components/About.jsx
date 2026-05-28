import { FadeInSection } from './FadeInSection'

const skills = [
  { label: 'React', color: 'blue' },
  { label: 'TypeScript', color: 'blue' },
  { label: 'Node.js', color: 'green' },
  { label: 'Python', color: 'green' },
  { label: 'PostgreSQL', color: 'orange' },
  { label: 'AWS', color: 'orange' },
  { label: 'Docker', color: 'purple' },
  { label: 'REST APIs', color: 'purple' },
  { label: 'Git', color: 'gray' },
]

const chipColors = {
  purple: 'bg-[#EDE9FE] dark:bg-[#2D1B69] text-[#6D28D9] dark:text-[#A78BFA]',
  blue:   'bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA]',
  green:  'bg-[#D1FAE5] dark:bg-[#064E3B] text-[#065F46] dark:text-[#34D399]',
  orange: 'bg-[#FEF3C7] dark:bg-[#451A03] text-[#92400E] dark:text-[#FCD34D]',
  gray:   'bg-[#F3F4F6] dark:bg-[#2A2A2A] text-[#374151] dark:text-[#9B9B9B]',
}

export function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center bg-[#F7F6F3] dark:bg-[#242424] px-8 py-24"
    >
      <div className="max-w-3xl w-full mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#7C3AED] dark:bg-[#A78BFA]" />
            <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] font-medium">
              About
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3]">
            A bit about me
          </h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="mt-8 space-y-4 border-l-2 border-[#E9E9E7] dark:border-[#3A3A3A] pl-6">
            <p className="text-base leading-relaxed text-[#6B6B6B] dark:text-[#9B9B9B]">
              I'm a software engineer who loves crafting clean, performant applications.
              My background spans full-stack web development, distributed systems, and
              developer tooling. I care deeply about code quality, user experience, and
              shipping products that matter.
            </p>
            <p className="text-base leading-relaxed text-[#6B6B6B] dark:text-[#9B9B9B]">
              When I'm not coding, you'll find me reading about systems design,
              experimenting with new technologies, or enjoying a strong cup of coffee.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium">
                Skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill.label}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${chipColors[skill.color]}`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

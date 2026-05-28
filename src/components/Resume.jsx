import { FadeInSection } from './FadeInSection'

const experience = [
  {
    role: 'Software Engineer',
    company: 'Acme Corp',
    years: '2022 – Present',
    description:
      'Built and maintained full-stack features for a SaaS platform serving 50k+ users. Led migration from REST to GraphQL and reduced API response times by 35%.',
    tag: { label: 'Full-time', color: 'green' },
  },
  {
    role: 'Software Engineering Intern',
    company: 'Startup Co.',
    years: 'Summer 2021',
    description:
      'Developed REST APIs and internal tooling that reduced deployment time by 40%. Implemented automated test coverage from 20% to 75%.',
    tag: { label: 'Internship', color: 'blue' },
  },
]

const education = [
  {
    degree: 'B.S. Computer Science',
    institution: 'University of Example',
    years: '2018 – 2022',
  },
]

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Python', 'PostgreSQL', 'AWS', 'Docker', 'Linux', 'Git',
]

const tagColors = {
  green: 'bg-[#D1FAE5] dark:bg-[#064E3B] text-[#065F46] dark:text-[#34D399]',
  blue: 'bg-[#DBEAFE] dark:bg-[#1E3A5F] text-[#1D4ED8] dark:text-[#60A5FA]',
}

export function Resume() {
  return (
    <section
      id="resume"
      className="snap-start min-h-screen flex items-center justify-center bg-white dark:bg-[#191919] px-8 py-24"
    >
      <div className="max-w-3xl w-full mx-auto">
        <FadeInSection>
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#7C3AED] dark:bg-[#A78BFA]" />
                <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] font-medium">
                  Resume
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3]">
                Experience &<br />Education
              </h2>
            </div>
            <a
              href="#"
              className="mt-1 text-sm font-medium border border-[#E9E9E7] dark:border-[#3A3A3A] rounded-lg px-4 py-2 text-[#191919] dark:text-[#F7F6F3] hover:border-[#7C3AED] dark:hover:border-[#A78BFA] hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors whitespace-nowrap"
            >
              Download PDF ↓
            </a>
          </div>
        </FadeInSection>

        <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
          <FadeInSection delay={100}>
            <div className="py-8">
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium mb-6">
                Experience
              </p>
              <div className="space-y-8">
                {experience.map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto] gap-6 items-start">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <p className="font-semibold text-[#191919] dark:text-[#F7F6F3]">
                          {item.role}
                        </p>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[item.tag.color]}`}>
                          {item.tag.label}
                        </span>
                      </div>
                      <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#6B6B6B] dark:text-[#9B9B9B] whitespace-nowrap mt-0.5">
                      {item.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="py-8">
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium mb-6">
                Education
              </p>
              <div className="space-y-4">
                {education.map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto] gap-6 items-start">
                    <div>
                      <p className="font-semibold text-[#191919] dark:text-[#F7F6F3]">
                        {item.degree}
                      </p>
                      <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#6B6B6B] dark:text-[#9B9B9B] whitespace-nowrap mt-0.5">
                      {item.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="py-8">
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium mb-4">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#F3F4F6] dark:bg-[#2A2A2A] text-[#374151] dark:text-[#9B9B9B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

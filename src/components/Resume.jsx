import { FadeInSection } from "./FadeInSection";
import { chipColors, tagColors } from "../utils/colors";

const experience = [
  {
    company: "Mofilo",
    companyDesc: "Pre-funding mobile health & fitness startup",
    roles: [
      {
        role: "Software Engineer",
        years: "Sept 2025 – Feb 2026",
        tag: { label: "Internship", color: "green" },
        responsibilities: [
          "Built subscription and trial-validation system for in-app purchases with server-side entitlement checks, closing a bypass that previously allowed unauthorized access to premium features and protecting recurring subscription revenue",
          "Built an AI-powered calorie estimation feature using the Google Gemini Vision API within a Flutter mobile app, enabling users to log meals with a single photo and reducing manual entry time by approximately 50%",
          "Built internal admin and analytics infrastructure on Google Cloud Platform with Next.js, React, and Microsoft Clarity — giving the team behavioral analytics, runtime config, and self-serve documentation that previously required engineering tickets",
        ],
        skills: [
          { label: "React", color: "blue" },
          { label: "Flutter", color: "blue" },
          { label: "Dart", color: "blue" },
          { label: "Google Cloud Platform", color: "purple" },
          { label: "Firebase", color: "red" },
          { label: "Git", color: "gray" },
        ],
      },
    ],
  },
  {
    company: "Infogain",
    companyDesc: "Contractor at Meta (Facebook)",
    roles: [
      {
        role: "Software Engineer II",
        years: "2022 – Present",
        tag: { label: "Full-time", color: "green" },
        responsibilities: [
          "Conducted technical interviews and mentored junior engineers, contributing to hiring decisions and onboarding two new hires onto the annotation platform.",
          "Resolved 2 SEV-level production incidents during on-call rotations, restoring annotation throughput within 3 hours and unblocking cross-functional AI/ML teams whose model-training schedules depended on the queue",
          "Owned ML data-annotation tooling used by annotators globally; built in React, GraphQL, and Hack/PHP and tested with Jest; tooling fed datasets into downstream AI/ML data pipelines",
        ],
        skills: [
          { label: "Debugging", color: "red" },
          { label: "Python", color: "yellow" },
          { label: "React", color: "blue" },
          { label: "PHP/Hack", color: "blue" },
          { label: "Pandas", color: "green" },
          { label: "Jupyter Notebooks", color: "green" },
          { label: "Data Pipelines", color: "pink" },
          { label: "SQL", color: "sky" },
          { label: "Blob Storage", color: "gray" },
        ],
      },
      {
        role: "Software Engineer I",
        years: "Jan 2021-Jun 2023",
        tag: { label: "Full-time", color: "green" },
        responsibilities: [
          "Built an automated annotation-queue health monitor that surfaces backlog and SLA breaches daily, replacing manual queue checks",
          "Automated recurring AI/ML data-processing workflows by building reusable Python/Jupyter notebooks on internal tooling, eliminating ad-hoc one-off scripts and saving the team an estimated 10 hours per week in productivity",
          "Fixed a critical text-annotation bug in an NLG workflow that was silently corrupting training labels, improving dataset validity for Text2Text language queues and restoring stakeholder trust in the annotation pipeline",
        ],
        skills: [
          { label: "Python", color: "yellow" },
          { label: "React", color: "blue" },
          { label: "PHP/Hack", color: "blue" },
          { label: "Pandas", color: "green" },
          { label: "Jupyter Notebooks", color: "green" },
          { label: "Data Pipelines", color: "pink" },
          { label: "SQL", color: "sky" },
          { label: "Blob Storage", color: "gray" },
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    institution: "Western Governor's University",
    years: "2018 – 2022",
  },
  {
    degree: "Software Engineering Immersive Program",
    institution: "App Academy",
    years: "Jun 2021 – Sept 2021",
  },
  {
    degree: "B.S. Health Sciences (Health Administration Concentration)",
    institution: "Stony Brook University",
    years: "2016 – 2021",
  },
];

function RoleEntry({ role }) {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3]">
          {role.role}
        </p>
        <span
          className={`px-2 py-0.5 rounded-md text-xs font-medium ${tagColors[role.tag.color]}`}
        >
          {role.tag.label}
        </span>
        <span className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] ml-auto">
          {role.years}
        </span>
      </div>

      <ul className="mt-2 space-y-1">
        {role.responsibilities.map((resp, j) => (
          <li key={j} className="flex items-start gap-2">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-[#7C3AEF] dark:bg-[#f0f5f4] flex-shrink-0" />
            <span className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
              {resp}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex flex-wrap gap-1">
        {role.skills.map((skill) => (
          <span
            key={skill.label}
            className={`px-2 py-0.5 rounded-md text-xs font-medium ${chipColors[skill.color]}`}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </>
  );
}

export function Resume() {
  return (
    <section
      id="resume"
      className="snap-start min-h-screen flex items-center justify-center bg-[#f6f5f4] dark:bg-[#191919] px-8 py-14"
    >
      <div className="max-w-3xl w-full mx-auto">
        <FadeInSection>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-sm bg-[#7C3AED] dark:bg-[#A78BFA]" />
                <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] font-medium">
                  Resume
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3]">
                Experience & Education
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
            <div className="py-4">
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium mb-3">
                Experience
              </p>
              <div className="space-y-5">
                {experience.map((item, i) => (
                  <div key={i} className="rounded-xl border border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#ffffff] dark:bg-[#242424] p-4">
                    <p className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3]">
                      {item.company}
                      {item.companyDesc && (
                        <>
                          <span className="mx-2 opacity-30">·</span>
                          <span className="italic font-normal text-[#6B6B6B] dark:text-[#9B9B9B]">
                            {item.companyDesc}
                          </span>
                        </>
                      )}
                    </p>

                    {item.roles.length === 1 ? (
                      <div className="mt-1.5">
                        <RoleEntry role={item.roles[0]} />
                      </div>
                    ) : (
                      <div className="mt-2.5 relative border-l-2 border-[#E9E9E7] dark:border-[#2A2A2A] ml-1">
                        {item.roles.map((role, j) => (
                          <div key={j} className="relative pl-5 pb-4 last:pb-0">
                            <span className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full border-2 border-[#7C3AED] dark:border-[#A78BFA] bg-[#ffffff] dark:bg-[#242424]" />
                            <RoleEntry role={role} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="py-4">
              <p className="text-xs uppercase tracking-widest text-[#6B6B6B] dark:text-[#9B9B9B] font-medium mb-3">
                Education
              </p>
              <div className="space-y-3">
                {education.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto] gap-4 items-start rounded-xl border border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#ffffff] dark:bg-[#242424] p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3]">
                        {item.degree}
                      </p>
                      <p className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] whitespace-nowrap mt-0.5">
                      {item.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

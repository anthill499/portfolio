import { useState } from "react";
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
          { label: "React",                 color: "blue"   },
          { label: "Flutter",               color: "blue"   },
          { label: "Dart",                  color: "blue"   },
          { label: "Google Cloud Platform", color: "purple" },
          { label: "Firebase",              color: "red"    },
          { label: "Git",                   color: "gray"   },
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
          { label: "Debugging",         color: "red"    },
          { label: "Python",            color: "yellow" },
          { label: "React",             color: "blue"   },
          { label: "PHP/Hack",          color: "blue"   },
          { label: "Pandas",            color: "green"  },
          { label: "Jupyter Notebooks", color: "green"  },
          { label: "Data Pipelines",    color: "pink"   },
          { label: "SQL",               color: "sky"    },
          { label: "Blob Storage",      color: "gray"   },
        ],
      },
      {
        role: "Software Engineer I",
        years: "Jan 2021 – Jun 2023",
        tag: { label: "Full-time", color: "green" },
        responsibilities: [
          "Built an automated annotation-queue health monitor that surfaces backlog and SLA breaches daily, replacing manual queue checks",
          "Automated recurring AI/ML data-processing workflows by building reusable Python/Jupyter notebooks on internal tooling, eliminating ad-hoc one-off scripts and saving the team an estimated 10 hours per week in productivity",
          "Fixed a critical text-annotation bug in an NLG workflow that was silently corrupting training labels, improving dataset validity for Text2Text language queues and restoring stakeholder trust in the annotation pipeline",
        ],
        skills: [
          { label: "Python",            color: "yellow" },
          { label: "React",             color: "blue"   },
          { label: "PHP/Hack",          color: "blue"   },
          { label: "Pandas",            color: "green"  },
          { label: "Jupyter Notebooks", color: "green"  },
          { label: "Data Pipelines",    color: "pink"   },
          { label: "SQL",               color: "sky"    },
          { label: "Blob Storage",      color: "gray"   },
        ],
      },
    ],
  },
];

function ChevronIcon({ isOpen }) {
  return (
    <svg
      width="18" height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 text-[#191919] dark:text-[#F7F6F3] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function RoleEntry({ role, dotBg }) {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <p className="font-semibold text-[#191919] dark:text-[#F7F6F3]">
          {role.role}
        </p>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColors[role.tag.color]}`}>
          {role.tag.label}
        </span>
        <span className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] ml-auto">
          {role.years}
        </span>
      </div>

      <ul className="mt-2 space-y-1.5">
        {role.responsibilities.map((resp, j) => (
          <li key={j} className="flex items-start gap-2">
            <span className="mt-[6px] w-1 h-1 rounded-full bg-[#7C3AEF] dark:bg-[#f0f5f4] flex-shrink-0" />
            <span className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
              {resp}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {role.skills.map((skill) => (
          <span
            key={skill.label}
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${chipColors[skill.color]}`}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </>
  );
}

export function WorkExperience() {
  // Mofilo (index 0) open by default
  const [expanded, setExpanded] = useState(0);

  const toggle = (i) => setExpanded(prev => prev === i ? null : i);

  return (
    <section
      id="resume"
      className="snap-start h-screen flex flex-col bg-white dark:bg-[#191919] overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-16">
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
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3]">
                Work Experience
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

        <FadeInSection delay={100}>
          <div className="space-y-3">
            {experience.map((item, i) => {
              const isOpen = expanded === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#F7F6F3] dark:bg-[#1E1E1E] overflow-hidden"
                >
                  {/* Clickable header */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#EFEEEB] dark:hover:bg-[#252525] transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-[#191919] dark:text-[#F7F6F3]">
                        {item.company}
                        {item.companyDesc && (
                          <>
                            <span className="mx-2 opacity-30">·</span>
                            <span className="italic font-normal text-sm text-[#6B6B6B] dark:text-[#9B9B9B]">
                              {item.companyDesc}
                            </span>
                          </>
                        )}
                      </p>
                      {!isOpen && (
                        <p className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                          {item.roles.map(r => r.role).join("  ·  ")}
                        </p>
                      )}
                    </div>
                    <ChevronIcon isOpen={isOpen} />
                  </button>

                  {/* Expandable body */}
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4">
                        {item.roles.length === 1 ? (
                          <RoleEntry role={item.roles[0]} />
                        ) : (
                          <div className="relative border-l-2 border-[#E9E9E7] dark:border-[#2A2A2A] ml-1">
                            {item.roles.map((role, j) => (
                              <div key={j} className="relative pl-5 pb-4 last:pb-0">
                                <span className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full border-2 border-[#7C3AED] dark:border-[#A78BFA] bg-[#F7F6F3] dark:bg-[#1E1E1E]" />
                                <RoleEntry role={role} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
      </div>
    </section>
  );
}

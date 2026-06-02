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
        years: "Jun 2023 – Present",
        tag: { label: "Full-time", color: "blue" },
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
          { label: "AWS S3", color: "orange" },
        ],
      },
      {
        role: "Software Engineer I",
        years: "Jan 2021 – Jun 2023",
        tag: { label: "Full-time", color: "blue" },
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
          { label: "AWS S3", color: "orange" },
        ],
      },
    ],
  },
];

function ChevronIcon({ isOpen }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`flex-shrink-0 text-[#9B9B9B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function RoleEntry({ role }) {
  return (
    <div className="space-y-4">
      {/* Role title row — date on its own line, no ml-auto wrapping issue */}
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3]">
            {role.role}
          </span>
          <span
            className={`px-2 py-0.5 rounded-md text-xs font-medium ${tagColors[role.tag.color]}`}
          >
            {role.tag.label}
          </span>
        </div>
        <p className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] mt-1 tabular-nums">
          {role.years}
        </p>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2.5">
        {role.responsibilities.map((resp, j) => (
          <li key={j} className="flex items-start gap-3">
            <span className="mt-[7px] w-1 h-1 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA] flex-shrink-0" />
            <span className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
              {resp}
            </span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div>
        <p className="text-[10px] uppercase tracking-widest font-semibold text-[#9B9B9B] dark:text-[#6B6B6B] mb-2">
          Skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span
              key={skill.label}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${chipColors[skill.color]}`}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkExperience() {
  const [expanded, setExpanded] = useState(0);

  const toggle = (i) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section
      id="resume"
      className="snap-start h-screen flex flex-col bg-[#f6f5f4] dark:bg-[#191919] overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-3xl w-full mx-auto">
          <FadeInSection>
            <div className="flex items-start justify-between gap-4 mb-8">
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
                className="shrink-0 mt-1 text-sm font-medium border border-[#E9E9E7] dark:border-[#3A3A3A] rounded-lg px-3 py-2 text-[#191919] dark:text-[#F7F6F3] hover:border-[#7C3AED] dark:hover:border-[#A78BFA] hover:text-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors whitespace-nowrap"
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
                    className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-[#7C3AED]/30 dark:border-[#A78BFA]/20 bg-[#ffffff] dark:bg-[#242424] shadow-sm"
                        : "border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#ffffff] dark:bg-[#242424]"
                    }`}
                  >
                    {/* Card header — always visible */}
                    <button
                      onClick={() => toggle(i)}
                      className="w-full text-left px-4 sm:px-5 py-4 flex items-start justify-between gap-4 hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#191919] dark:text-[#F7F6F3] leading-snug">
                          {item.company}
                        </p>
                        {item.companyDesc && (
                          <p className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] mt-0.5">
                            {item.companyDesc}
                          </p>
                        )}
                        {/* Role preview chips — shown only when collapsed */}
                        {!isOpen && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {item.roles.map((r, j) => (
                              <span
                                key={j}
                                className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] border border-[#E9E9E7] dark:border-[#3A3A3A] rounded px-2 py-0.5"
                              >
                                {r.role}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <ChevronIcon isOpen={isOpen} />
                    </button>

                    {/* Expandable body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Separator */}
                        <div className="h-px bg-[#E9E9E7] dark:bg-[#2A2A2A] mx-4 sm:mx-5" />

                        <div className="px-4 sm:px-5 py-5">
                          {item.roles.length === 1 ? (
                            <RoleEntry role={item.roles[0]} />
                          ) : (
                            /* Multiple roles: stacked with dividers */
                            <div className="space-y-6">
                              {item.roles.map((role, j) => (
                                <div key={j}>
                                  {j > 0 && (
                                    <div className="h-px bg-[#E9E9E7] dark:bg-[#2A2A2A] mb-6" />
                                  )}
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

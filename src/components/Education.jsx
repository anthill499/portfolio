import { useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { chipColors } from "../utils/colors";

const education = [
  {
    degree: "B.S. Computer Science",
    institution: "Western Governor's University",
    years: "2025 – 2026",
  },
  {
    degree: "Software Engineering Immersive Program",
    institution: "App Academy",
    years: "Jun 2021 – Sept 2021",
    involvements: [
      {
        name: "Picky Eater",
        role: "Backend Engineer",
        years: "2020 – 2021",
        bullets: [
          "Created user data models and system architecture using Express & Node.js",
          "Designed private restaurant selection session feature using WebSockets, Node.js and PostgreSQL",
          "Led team standup meetings to streamline timelines and MVP deliverables",
        ],
      },
    ],
  },
  {
    degree: "B.S. Health Sciences (Health Administration Concentration)",
    institution: "Stony Brook University",
    years: "2016 – 2021",
    involvements: [
      {
        name: "Philippine United Student Organization (PUSO)",
        role: "Executive Board Member",
        years: "2018 – 2019",
        bullets: [],
      },
      {
        name: "Intramural Basketball League",
        role: "Forward",
        years: "2019 – 2020",
        bullets: [],
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

export function Education() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="education"
      className="snap-start min-h-screen flex items-center justify-center bg-[#f6f5f4] dark:bg-[#191919] px-4 sm:px-8 py-16"
    >
      <div className="max-w-3xl w-full mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-[#7C3AED] dark:bg-[#A78BFA]" />
            <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] font-medium">
              Resume
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#191919] dark:text-[#F7F6F3] mb-6">
            Education
          </h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="space-y-3">
            {education.map((item, i) => {
              const hasInvolvements = item.involvements?.length > 0;
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
                  {/* Card header */}
                  {hasInvolvements ? (
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="w-full text-left px-4 sm:px-5 py-4 flex items-start justify-between gap-4 hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#191919] dark:text-[#F7F6F3] leading-snug">
                          {item.degree}
                        </p>
                        <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                          {item.institution}
                        </p>
                        {!isOpen && (
                          <p className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] mt-1.5 tabular-nums">
                            {item.years}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {isOpen && (
                          <span className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] tabular-nums">
                            {item.years}
                          </span>
                        )}
                        <ChevronIcon isOpen={isOpen} />
                      </div>
                    </button>
                  ) : (
                    <div className="px-4 sm:px-5 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-[#191919] dark:text-[#F7F6F3] leading-snug">
                          {item.degree}
                        </p>
                        <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                      <span className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] whitespace-nowrap tabular-nums sm:mt-0.5 shrink-0">
                        {item.years}
                      </span>
                    </div>
                  )}

                  {/* Expandable involvements */}
                  {hasInvolvements && (
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="h-px bg-[#E9E9E7] dark:bg-[#2A2A2A] mx-4 sm:mx-5" />
                        <div className="px-4 sm:px-5 py-4">
                          <p className="text-[10px] uppercase tracking-widest font-semibold text-[#9B9B9B] dark:text-[#6B6B6B] mb-3">
                            Involvements
                          </p>
                          <div className="space-y-2.5">
                            {item.involvements.map((inv, j) => (
                              <div
                                key={j}
                                className="rounded-xl border border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#f6f5f4] dark:bg-[#1d1d1d] px-4 py-3"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <p className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3] leading-snug">
                                    {inv.name}
                                  </p>
                                  <span className="text-xs text-[#9B9B9B] dark:text-[#6B6B6B] tabular-nums whitespace-nowrap shrink-0">
                                    {inv.years}
                                  </span>
                                </div>
                                <span
                                  className={`inline-block mt-1.5 px-2 py-0.5 rounded-md text-xs font-medium ${chipColors.gray}`}
                                >
                                  {inv.role}
                                </span>
                                {inv.bullets?.length > 0 && (
                                  <ul className="mt-2 space-y-1.5">
                                    {inv.bullets.map((b, k) => (
                                      <li
                                        key={k}
                                        className="flex items-start gap-2.5"
                                      >
                                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA] flex-shrink-0" />
                                        <span className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
                                          {b}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

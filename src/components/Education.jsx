import { FadeInSection } from "./FadeInSection";

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
  },
  {
    degree: "B.S. Health Sciences (Health Administration Concentration)",
    institution: "Stony Brook University",
    years: "2016 – 2021",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="snap-start min-h-screen flex items-center justify-center bg-[#F7F6F3] dark:bg-[#242424] px-8 py-16"
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
          <div className="space-y-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E9E9E7] dark:border-[#2A2A2A] bg-white dark:bg-[#2A2A2A] p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#191919] dark:text-[#F7F6F3]">
                      {item.degree}
                    </p>
                    <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B] whitespace-nowrap mt-0.5">
                    {item.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

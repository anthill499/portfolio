import { FadeInSection } from "./FadeInSection";
import { chipColors } from "../utils/colors";

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
              I'm a software engineer who loves crafting clean, performant
              applications. My background spans full-stack web development,
              distributed systems, and developer tooling. I care deeply about
              code quality, user experience, and shipping products that matter.
            </p>
            <p className="text-base leading-relaxed text-[#6B6B6B] dark:text-[#9B9B9B]">
              When I'm not coding, you'll find me reading about systems design,
              experimenting with new technologies, or enjoying a strong cup of
              coffee.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

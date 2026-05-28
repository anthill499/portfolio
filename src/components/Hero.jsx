import { useState, useEffect, useRef } from "react";
import { FadeInSection } from "./FadeInSection";

const phrases = [
  { line1: "Anthony", line2: "Huang",    swap1: 1, swap2: 3 }, // 'n'
  { line1: "Software", line2: "Engineer", swap1: 7, swap2: 5 }, // 'e'
  { line1: "Problem",  line2: "Solver",   swap1: 5, swap2: 4 }, // 'e'
];

function TypedLine({ text, offset, swapCharIdx, swapRef }) {
  return (
    <span className="phrase-flip-in block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={i === swapCharIdx ? swapRef : null}
          className="char-appear"
          style={{ "--char-index": offset + i }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/anthill499",           Icon: GitHubIcon   },
  { label: "LinkedIn", href: "https://linkedin.com/in/anthonyhuang499", Icon: LinkedInIcon },
  { label: "LeetCode", href: "https://leetcode.com/anthill499",          Icon: LeetCodeIcon },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const char1Ref = useRef(null);
  const char2Ref = useRef(null);

  useEffect(() => {
    const timers = [];

    // Step 1 — remove char-appear (releases its opacity:0 rule) then highlight red
    timers.push(setTimeout(() => {
      const el1 = char1Ref.current;
      const el2 = char2Ref.current;
      el1?.classList.remove("char-appear");
      el2?.classList.remove("char-appear");
      el1?.classList.add("char-red");
      el2?.classList.add("char-red");
    }, 1200));

    // Step 2 — animate the swap
    timers.push(setTimeout(() => {
      const el1 = char1Ref.current;
      const el2 = char2Ref.current;
      if (!el1 || !el2) return;

      const r1 = el1.getBoundingClientRect();
      const r2 = el2.getBoundingClientRect();

      el1.style.setProperty("--swap-dx", `${r2.left - r1.left}px`);
      el1.style.setProperty("--swap-dy", `${r2.top  - r1.top}px`);
      el2.style.setProperty("--swap-dx", `${r1.left - r2.left}px`);
      el2.style.setProperty("--swap-dy", `${r1.top  - r2.top}px`);

      el1.classList.add("char-swap-active");
      el2.classList.add("char-swap-active");
    }, 1800));

    // Step 3 — glow dissolve back to original color
    timers.push(setTimeout(() => {
      const el1 = char1Ref.current;
      const el2 = char2Ref.current;
      el1?.classList.remove("char-red");
      el2?.classList.remove("char-red");
      el1?.classList.add("char-glow-dissolve");
      el2?.classList.add("char-glow-dissolve");
    }, 2450));

    // Step 4 — advance to next phrase
    timers.push(setTimeout(() => {
      setIdx(prev => (prev + 1) % phrases.length);
    }, 4200));

    return () => timers.forEach(clearTimeout);
  }, [idx]);

  const { line1, line2, swap1, swap2 } = phrases[idx];

  return (
    <section
      id="hero"
      className="snap-start dot-grid relative min-h-screen flex flex-col justify-center bg-white dark:bg-[#191919] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-8 py-32 w-full">
        <FadeInSection>
          <div className="text-5xl mb-8 select-none">👋</div>
          <h1 className="text-[2.5rem] md:text-[3.75rem] lg:text-[4.5rem] font-black tracking-[-0.04em] leading-[0.9] text-[#191919] dark:text-[#F7F6F3]">
            <TypedLine
              key={`${idx}-0`}
              text={line1}
              offset={0}
              swapCharIdx={swap1}
              swapRef={char1Ref}
            />
            <TypedLine
              key={`${idx}-1`}
              text={line2}
              offset={line1.length + 2}
              swapCharIdx={swap2}
              swapRef={char2Ref}
            />
          </h1>
          <p className="mt-8 text-lg text-[#6B6B6B] dark:text-[#9B9B9B] max-w-md leading-relaxed">
            I build thoughtful software products that people enjoy using.
            Currently exploring the intersection of great design and engineering.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 text-sm text-[#6B6B6B] dark:text-[#9B9B9B]">
                <PinIcon />
                New York, NY
              </span>
              <a
                href="mailto:anthill499@gmail.com"
                className="flex items-center gap-1.5 text-sm text-[#6B6B6B] dark:text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] transition-colors"
              >
                <MailIcon />
                anthill499@gmail.com
              </a>
            </div>

            <div className="flex gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#E9E9E7] dark:border-[#3A3A3A] flex items-center justify-center text-[#6B6B6B] dark:text-[#9B9B9B] hover:border-[#7C3AED] hover:text-[#7C3AED] dark:hover:border-[#A78BFA] dark:hover:text-[#A78BFA] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="absolute bottom-10 left-8 flex items-center gap-3">
        <div className="w-6 h-px bg-[#7C3AED] dark:bg-[#A78BFA]" />
        <span className="text-xs text-[#7C3AED] dark:text-[#A78BFA] tracking-widest uppercase font-medium">
          Scroll
        </span>
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback } from "react";
import { FadeInSection } from "./FadeInSection";
import { chipColors } from "../utils/colors";
import headshot from "../assets/headshot.JPG";

// ─── Overlay detail data ───────────────────────────────────────────────────────

const spotsDetail = [
  {
    category: "Korean BBQ",
    color: "orange",
    spots: [
      {
        status: "been",
        name: "Wonderpig BBQ",
        location: "Flushing, Queens",
        rating: 5.0,
        note: "Best unlimited KBBQ in NYC. The pork belly and marinated short rib are legitimately unreal.",
      },
      {
        status: "been",
        name: "COTE Flatiron",
        location: "Flatiron, Manhattan",
        rating: 5.0,
        note: "Great quality cuts and solid service. I highly recommend this place.",
      },
      {
        status: "been",
        name: "Jeong Yuk Jeom",
        location: "Midtown, Manhattan",
        rating: 4.8,
        note: "Great late night option that is perfect for people who love side dishes",
      },
      {
        status: "want",
        name: "Jua",
        location: "Midtown, Manhattan",
        note: "Heard the short rib and the premium cuts here are worth every penny.",
      },
    ],
  },
  {
    category: "Pizza",
    color: "red",
    spots: [
      {
        status: "been",
        name: "L'industrie Pizzeria",
        location: "Williamsburg, Brooklyn",
        rating: 5.0,
        note: "The burrata slice is top-tier. Non-negotiable for any trip to Williamsburg.",
      },
      {
        status: "been",
        name: "Rubirosa Pizza",
        location: "SoHo, Manhattan",
        rating: 4.9,
        note: "A cozy spot. Pretty nice for dates. The Chainsmokers' favorite spot!",
      },
      {
        status: "been",
        name: "Paulie Gee's",
        location: "Greenpoint, Manhattan",
        rating: 5.0,
        note: "Great spot with cozy vibes. If you're visiting Greenpoint and want a nice small pie to yourself, come here.",
      },
      {
        status: "been",
        name: "Krispy Pizza",
        location: "Dyker Heights, Brooklyn",
        rating: 4.7,
        note: "The most reliable neighborhood pizzeria I have ever had.",
      },
      {
        status: "want",
        name: "Di Fara Pizza",
        location: "Midwood, Brooklyn",
        note: "A legendary old-school NYC institution. On the list for a long time.",
      },
      {
        status: "want",
        name: "Scarr's Pizza",
        location: "Lower East Side, Manhattan",
        note: "Been wanting to try this spot for a while.",
      },
    ],
  },
  {
    category: "Bakery / Café",
    color: "brown",
    spots: [
      {
        status: "been",
        name: "Cafe W",
        location: "Flushing, Queens",
        rating: 4.7,
        note: "Excellent pistacio-flavored drinks and 10/10 pastries. Great vibe for a trip to Flushing, Queens.",
      },
      {
        status: "been",
        name: "Kora",
        location: "Sunnyside, Manhattan",
        rating: 5.0,
        note: "The Filipino-inspired pastries are life-changing.",
      },
    ],
  },
  {
    category: "Skewers",
    color: "brown",
    spots: [
      {
        status: "been",
        name: "Ganblaze",
        location: "Flushing, Queens",
        rating: 4.8,
        note: "Go for the wagyu skewers and the corn. Perfect for a group.",
      },
      {
        status: "want",
        name: "Kanto",
        location: "East Village, Manhattan",
        note: "Filipino skewers with a modern twist — this one keeps coming up on Beli.",
      },
    ],
  },
];

const activitiesDetail = [
  {
    status: "active",
    label: "Indoor Rock Climbing",
    color: "blue",
    emoji: "🧗",
    details: [
      "Currently V3–V5 🟠🔴boulderer, working toward V6🟣",
      "Home gym: Vital Brooklyn",
    ],
  },
  {
    status: "active",
    label: "Music Production",
    color: "purple",
    emoji: "🎛️",
    details: [
      "DAW: Ableton Live",
      "Genres: exploring hybrid trap, bass house and other genres",
      "Been producing on and off since 2019",
    ],
  },
  {
    status: "active",
    label: "Beli App",
    color: "orange",
    emoji: "📍",
    details: [
      "My go-to app for tracking every restaurant visit",
      "100+ spots logged across NYC",
      "Queens is criminally underrated for food",
      "Beli score: 9.9 — selective eater 😅",
      "Beli friend score: 9.5 — basically means I would eat anything",
    ],
  },
  {
    status: "active",
    label: "Coffee",
    color: "brown",
    emoji: "☕",
    details: [
      "Huge coffee enthusiast",
      "My go-to order: An Americano + an extra shot of espresso.",
    ],
  },
];

const currentlyDetail = [
  {
    status: "current",
    label: "Reading",
    value: "Designing Database-Intensive Applications",
    emoji: "📖",
    color: "indigo",
    detail:
      "By Martin Kleppmann. a comprehensive guide for software engineers and architects on building reliable, scalable, and maintainable data systems, covering fundamental principles and trade-offs in data storage, processing, and distributed systems.",
    meta: "Started Feb 2026",
  },
  {
    status: "current",
    label: "Listening",
    value: "Different Lives",
    emoji: "🎵",
    color: "purple",
    detail: "By Fly By Midnight, Rachel Grae.",
    meta: "",
  },
  {
    status: "current",
    label: "Making",
    value: "Music & side projects",
    emoji: "🎛️",
    color: "blue",
    detail:
      "Exploring what sub-genre of EDM i like to produce. I started off making hip-hop/rap beats and slowly transitioned into future bass music.",
    meta: "Ongoing",
  },
];

// ─── Panel content registry ───────────────────────────────────────────────────

function Rating({ rating }) {
  return (
    <span className="flex items-center gap-1 shrink-0">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="#F59E0B"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <span className="text-[11px] font-semibold text-[#6B6B6B] dark:text-[#9B9B9B] tabular-nums">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

// Spots panel needs local state for the active filter, so it's a component
function SpotsContent() {
  const [activeCategory, setActiveCategory] = useState(spotsDetail[0].category);
  const activeSpots =
    spotsDetail.find((c) => c.category === activeCategory)?.spots ?? [];

  return (
    <div>
      {/* Filter chip row */}
      <div className="flex flex-wrap gap-2 mb-6">
        {spotsDetail.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-200 ${
              activeCategory === cat.category
                ? chipColors[cat.color]
                : "bg-transparent border-[#E9E9E7] dark:border-[#2A2A2A] text-[#6B6B6B] dark:text-[#9B9B9B] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Spot cards — 2-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activeSpots.map((spot) => (
          <div
            key={spot.name}
            className={`rounded-xl border bg-[#ffffff] dark:bg-[#242424] px-4 py-4 shadow-sm flex flex-col gap-1.5 ${
              spot.status === "want"
                ? "border-dashed border-[#E9E9E7] dark:border-[#2A2A2A]"
                : "border-[#E9E9E7] dark:border-[#2A2A2A]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-sm text-[#191919] dark:text-[#F7F6F3] leading-snug">
                {spot.name}
              </p>
              {spot.status === "want" ? (
                <span
                  className={`shrink-0 text-[11px] px-2 py-0.5 rounded-md font-medium ${chipColors.sky}`}
                >
                  On the list
                </span>
              ) : (
                <Rating rating={spot.rating} />
              )}
            </div>
            <p className="text-[11px] text-[#9B9B9B]">{spot.location}</p>
            <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed mt-1">
              {spot.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitiesContent() {
  const [active, setActive] = useState(activitiesDetail[0].label);
  const item = activitiesDetail.find((a) => a.label === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {activitiesDetail.map((a) => (
          <button
            key={a.label}
            onClick={() => setActive(a.label)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-200 ${
              active === a.label
                ? chipColors[a.color]
                : "bg-transparent border-[#E9E9E7] dark:border-[#2A2A2A] text-[#6B6B6B] dark:text-[#9B9B9B] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {item && (
        <div
          className={`rounded-xl border bg-[#ffffff] dark:bg-[#242424] px-5 py-5 shadow-sm ${
            item.status === "want"
              ? "border-dashed border-[#E9E9E7] dark:border-[#2A2A2A]"
              : "border-[#E9E9E7] dark:border-[#2A2A2A]"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl leading-none">{item.emoji}</span>
            {item.status === "want" ? (
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${chipColors.sky}`}
              >
                Want to try
              </span>
            ) : (
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${chipColors[item.color]}`}
              >
                {item.label}
              </span>
            )}
          </div>
          <ul className="space-y-2.5">
            {item.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-[7px] w-1 h-1 rounded-full bg-[#7C3AED] dark:bg-[#A78BFA] flex-shrink-0" />
                <span className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CurrentlyContent() {
  const [active, setActive] = useState(currentlyDetail[0].label);
  const item = currentlyDetail.find((c) => c.label === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {currentlyDetail.map((c) => (
          <button
            key={c.label}
            onClick={() => setActive(c.label)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-200 ${
              active === c.label
                ? c.status === "upcoming"
                  ? chipColors.sky
                  : chipColors[c.color]
                : "bg-transparent border-[#E9E9E7] dark:border-[#2A2A2A] text-[#6B6B6B] dark:text-[#9B9B9B] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {item && (
        <div
          className={`rounded-xl border bg-[#ffffff] dark:bg-[#242424] px-5 py-5 shadow-sm ${
            item.status === "upcoming"
              ? "border-dashed border-[#E9E9E7] dark:border-[#2A2A2A]"
              : "border-[#E9E9E7] dark:border-[#2A2A2A]"
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl leading-none mt-0.5 shrink-0">
              {item.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7C3AED] dark:text-[#A78BFA] mb-1.5">
                {item.label}
              </p>
              {item.status === "upcoming" ? (
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${chipColors.sky}`}
                >
                  Coming up
                </span>
              ) : (
                <span
                  className={`px-2 py-0.5 rounded-md text-xs font-medium ${chipColors[item.color]}`}
                >
                  {item.value}
                </span>
              )}
              <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] leading-relaxed mt-3">
                {item.detail}
              </p>
              <p className="text-[11px] text-[#9B9B9B] dark:text-[#6B6B6B] mt-2 italic">
                {item.meta}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const PANEL_CONTENT = {
  spots: {
    emoji: "🍽️",
    title: "Favorite Spots",
    render: () => <SpotsContent />,
  },

  activities: {
    emoji: "⚡",
    title: "Things I Do",
    render: () => <ActivitiesContent />,
  },

  currently: {
    emoji: "✦",
    title: "Currently",
    render: () => <CurrentlyContent />,
  },
};

// ─── Full-screen panel ────────────────────────────────────────────────────────
// The outer container is ALWAYS in the DOM (never mounts/unmounts) to avoid
// compositing-layer flashes. It uses `hidden` when fully idle, opacity for transitions.

function Panel({ activeId, isOpen, onClose }) {
  const content = activeId ? PANEL_CONTENT[activeId] : null;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Fully idle: no active panel and not mid-transition → display:none
  const isIdle = !activeId && !isOpen;

  return (
    <div
      className={`fixed inset-0 z-[70] flex flex-col bg-[#f6f5f4] dark:bg-[#191919] transition-opacity duration-300 ease-out ${
        isIdle
          ? "hidden"
          : isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-10 shrink-0 flex items-center gap-3 px-6 py-4 border-b border-[#E9E9E7] dark:border-[#2A2A2A] bg-[#f6f5f4]/95 dark:bg-[#191919]/95 backdrop-blur-sm shadow-sm">
        <button
          onClick={onClose}
          aria-label="Close"
          className="p-1.5 rounded-md text-[#9B9B9B] hover:text-[#191919] dark:hover:text-[#F7F6F3] hover:bg-[#edecea] dark:hover:bg-[#2a2a2a] transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 4l12 12M16 4L4 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="h-4 w-px bg-[#E9E9E7] dark:bg-[#2A2A2A]" />
        {content && (
          <>
            <span className="text-base leading-none">{content.emoji}</span>
            <span className="text-sm font-semibold text-[#191919] dark:text-[#F7F6F3]">
              {content.title}
            </span>
          </>
        )}
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto overscroll-contain scrollbar-hide">
        <div className="max-w-2xl mx-auto px-6 py-8">{content?.render()}</div>
      </div>
    </div>
  );
}

// ─── Card button ──────────────────────────────────────────────────────────────

function CardButton({ emoji, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#E9E9E7] dark:border-[#3A3A3A] bg-[#ffffff]/80 dark:bg-[#242424]/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#7C3AED]/35 dark:hover:border-[#A78BFA]/25 hover:bg-[#ffffff] dark:hover:bg-[#242424] transition-all duration-200"
    >
      <span className="text-sm leading-none select-none">{emoji}</span>
      <span className="text-xs font-semibold text-[#191919] dark:text-[#F7F6F3] group-hover:text-[#7C3AED] dark:group-hover:text-[#A78BFA] transition-colors duration-200">
        {label}
      </span>
    </button>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function About() {
  const [activePanel, setActivePanel] = useState(null); // which content to render
  const [panelOpen, setPanelOpen] = useState(false); // drives the CSS transition

  const open = useCallback((id) => {
    setActivePanel(id);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setPanelOpen(true)),
    );
  }, []);

  const close = useCallback(() => {
    setPanelOpen(false);
    setTimeout(() => setActivePanel(null), 300);
  }, []);

  return (
    <>
      <section
        id="about"
        className="snap-start min-h-screen flex items-center justify-center bg-[#f6f5f4] dark:bg-[#191919] px-4 sm:px-8 py-20 sm:py-24 relative overflow-hidden"
      >
        <img
          src={headshot}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18] dark:opacity-[0.12] select-none pointer-events-none"
        />

        <div className="max-w-3xl w-full mx-auto relative z-10">
          {/* Section label */}
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

          {/* Two-column: bio left, buttons right */}
          <FadeInSection delay={100}>
            <div className="mt-8 md:grid md:grid-cols-[1fr_200px] md:gap-12 md:items-center">
              {/* Bio */}
              <div className="space-y-4 border-l-2 border-[#E9E9E7] dark:border-[#3A3A3A] pl-6">
                <p className="text-base leading-relaxed text-[#6B6B6B] dark:text-[#9B9B9B]">
                  I'm a software engineer who loves crafting clean, performant
                  applications. My background spans full-stack web development,
                  distributed systems, and developer tooling. I care deeply
                  about code quality, user experience, and shipping products
                  that matter.
                </p>
                <p className="text-base leading-relaxed text-[#6B6B6B] dark:text-[#9B9B9B]">
                  When I'm not coding, you'll find me reading about systems
                  design, experimenting with new technologies, or enjoying a
                  strong cup of coffee.
                </p>
              </div>

              {/* Buttons — vertical stack */}
              <div className="mt-6 md:mt-0 flex flex-col gap-2.5">
                <CardButton
                  emoji="🍽️"
                  label="Favorite Spots"
                  onClick={() => open("spots")}
                />
                <CardButton
                  emoji="⚡"
                  label="Things I Do"
                  onClick={() => open("activities")}
                />
                <CardButton
                  emoji="✦"
                  label="Currently"
                  onClick={() => open("currently")}
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Panel activeId={activePanel} isOpen={panelOpen} onClose={close} />
    </>
  );
}

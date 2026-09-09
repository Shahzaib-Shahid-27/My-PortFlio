import {AnimatePresence,motion,useInView} from "motion/react";
import { useRef, useState } from "react";

import {Code2,Terminal,Layers,Sparkles,GitBranch,Gauge,Palette,Waves,Server,Network,ShieldCheck,Lock,Database,Upload,Cloud,} from "lucide-react";

import {SectionHeading,easeSoft} from "../components/motion-primitives";

// MARQUEE
const marquee = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Express",
  "JWT",
  "Prisma",
  "PostgreSQL",
  "SQL",
  "APIs",
  "GitHub",
];

// SKILL CATEGORIES
const categories = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "HTML & CSS", level: 95 },
  ],

  Styling: [
    { name: "Tailwind CSS", level: 90 },
    { name: "Responsive Design", level: 92 },
    { name: "UI Development", level: 88 },
    { name: "CSS Animations", level: 82 },
  ],

  Backend: [
    { name: "Node.js & Express", level: 82 },
    { name: "REST APIs", level: 85 },
    { name: "JWT Authentication", level: 80 },
    { name: "Middleware", level: 82 },
    { name: "Multer", level: 75 },
    { name: "Cloudinary", level: 75 },
  ],

  Database: [
    { name: "Prisma ORM", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "SQL", level: 78 },
  ],

  Security: [
    { name: "JWT Tokens", level: 80 },
    { name: "bcrypt / Password Hashing", level: 78 },
  ],

  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Vite", level: 88 },
    { name: "API Integration", level: 85 },
    { name: "Animation", level: 80 },
  ],
};

type Category = keyof typeof categories;

// TOOLS
const tools = [
  {
    icon: Code2,
    label: "React",
  },
  {
    icon: Terminal,
    label: "TypeScript",
  },
  {
    icon: Code2,
    label: "JavaScript",
  },
  {
    icon: Layers,
    label: "Tailwind CSS",
  },
  {
    icon: Palette,
    label: "HTML & CSS",
  },
  {
    icon: Server,
    label: "Node.js",
  },
  {
    icon: Server,
    label: "Express.js",
  },
  {
    icon: Network,
    label: "REST APIs",
  },
  {
    icon: ShieldCheck,
    label: "JWT Authentication",
  },
  {
    icon: Lock,
    label: "bcrypt",
  },
  {
    icon: GitBranch,
    label: "Middleware",
  },
  {
    icon: Database,
    label: "Prisma ORM",
  },
  {
    icon: Database,
    label: "PostgreSQL",
  },
  {
    icon: Database,
    label: "SQL",
  },
  {
    icon: Upload,
    label: "Multer",
  },
  {
    icon: Cloud,
    label: "Cloudinary",
  },
  {
    icon: Sparkles,
    label: "Framer Motion",
  },
  {
    icon: Gauge,
    label: "Vite",
  },
  {
    icon: GitBranch,
    label: "Git & GitHub",
  },
  {
    icon: Waves,
    label: "Animation",
  },
];

function Bar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {once: true,margin: "-40px",});

  return (
    
    <div ref={ref} className="w-full space-y-3">

      {/* Skill Name + Percentage */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">
          {name}
        </span>

        <span className="font-mono text-xs text-primary">
          {level}%
        </span>
      </div>

      {/* Progress Background */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: inView ? `${level}%` : "0%",
          }}
          transition={{
            duration: 1.1,
            delay: index * 0.1,
            ease: easeSoft,
          }}
          className="h-full rounded-full bg-gradient-accent"
        />
      </div>
    </div>
  );
}

// TOOL CARD
function ToolCard({
  icon: Icon,
  label,
  index,
}: {
  icon: React.ElementType;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: -10,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
        ease: easeSoft,
        layout: {
          duration: 0.4,
          ease: easeSoft,
        },
      }}
      whileHover={{
        scale: 1.07,
        rotate: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="glass-panel flex min-h-32.5 w-full flex-col items-center justify-center gap-3 overflow-visible rounded-2xl px-4 py-7"
    >
      <Icon
        size={22}
        strokeWidth={1.8}
        className="text-primary"
      />

      <span className="text-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}


function Skills() {
  // ACTIVE CATEGORY
  const [active, setActive] =useState<Category>("Frontend");

  // SHOW ALL TOOLS
  const [showAllTools, setShowAllTools] =useState(false);

  // VISIBLE TOOLS
  const visibleTools = showAllTools ? tools : tools.slice(0, 10);

  return (
    <>
      {/* SKILLS SECTION*/}
      <section className="section-shell">

        {/* HEADING*/}
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use."
          description="A collection of technologies and tools I use to build modern, responsive and interactive web experiences."
        />

        {/*  CATEGORY BUTTONS*/}
        <div className="mt-12 flex flex-wrap gap-4">
          {(Object.keys(categories) as Category[]).map(
            (cat) => (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="relative cursor-pointer overflow-hidden rounded-xl bg-gradient-accent px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                {/* Active Background */}
                {active === cat && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-xl bg-black m-1"
                    transition={{duration: 0.3, ease: easeSoft,}}
                  />
                )}

                {/* Button Text */}
                <span
                  className={`relative z-10 ${
                    active === cat
                      ? "text-white"
                      : "text-primary-foreground"
                  }`}
                >
                  {cat}
                </span>
              </motion.button>
            )
          )}
        </div>

        {/*  SKILL PROGRESS SECTION */}
        <div className="glass-panel mt-8 w-full rounded-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -14,
              }}
              transition={{
                duration: 0.4,
                ease: easeSoft,
              }}
              className="grid w-full gap-8 sm:grid-cols-2"
            >
              {categories[active].map(
                (skill, index) => (
                  <Bar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/*  TOOLS*/}
        <div className="mt-16 w-full">
          <AnimatePresence
            initial={false}
            mode="popLayout"
          >
            <motion.div
              layout
              className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            >
              {visibleTools.map(
                ({ icon, label }, index) => (
                  <ToolCard
                    key={label}
                    icon={icon}
                    label={label}
                    index={index}
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/*  SHOW MORE / SHOW LESS  */}
        {tools.length > 10 && (
          <motion.div
            layout
            className="mt-8 flex w-full justify-center"
          >
            <motion.button
              type="button"
              onClick={() =>
                setShowAllTools(
                  (previous) => !previous
                )
              }
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
                ease: easeSoft,
              }}
              className="cursor-pointer rounded-full border border-border bg-gradient-accent px-6 py-3 text-sm font-bold text-black transition-colors"
            >
              {showAllTools
                ? "Show Less"
                : `Show More (${tools.length - 10})`}
            </motion.button>
          </motion.div>
        )}
      </section>

      {/*  TECHNOLOGY MARQUEE*/}
      <section className="w-full overflow-hidden border-y border-border py-6">
        <motion.div
          animate={{
            x: ["0%", "-42%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-12 pr-14"
        >
          {[...marquee, ...marquee].map(
            (item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-display text-2xl font-semibold text-muted-foreground/50"
              >
                {item}

                <span className="ml-3 text-accent">
                  ◆
                </span>
              </span>
            )
          )}
        </motion.div>
      </section>
    </>
  );
}

export default Skills;
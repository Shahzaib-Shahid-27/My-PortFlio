import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import {
  Code2,
  Terminal,
  Layers,
  Sparkles,
  GitBranch,
  Gauge,
  Palette,
  Waves,
  Server,
  Network,
  ShieldCheck,
  Lock,
  Database,
  Upload,
  Cloud,
} from "lucide-react";

import {
  SectionHeading,
  StaggerGroup,
  staggerChild,
  easeSoft,
} from "../components/motion-primitives";

/* =========================================================
   MARQUEE
========================================================= */

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

/* =========================================================
   SKILL CATEGORIES
========================================================= */

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

/* =========================================================
   TOOLS
========================================================= */

const tools = [
  { icon: Code2, label: "React" },
  { icon: Terminal, label: "TypeScript" },
  { icon: Code2, label: "JavaScript" },
  { icon: Layers, label: "Tailwind CSS" },
  { icon: Palette, label: "HTML & CSS" },

  { icon: Server, label: "Node.js" },
  { icon: Server, label: "Express.js" },
  { icon: Network, label: "REST APIs" },
  { icon: ShieldCheck, label: "JWT Authentication" },
  { icon: Lock, label: "bcrypt" },

  { icon: GitBranch, label: "Middleware" },
  { icon: Database, label: "Prisma ORM" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Database, label: "SQL" },
  { icon: Upload, label: "Multer" },

  { icon: Cloud, label: "Cloudinary" },
  { icon: Sparkles, label: "Framer Motion" },
  { icon: Gauge, label: "Vite" },
  { icon: GitBranch, label: "Git & GitHub" },
  { icon: Waves, label: "Animation" },
];

/* =========================================================
   SKILL PROGRESS BAR
========================================================= */

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

  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  return (
    <div ref={ref} className="space-y-3">
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
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        {/* Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={
            inView
              ? { width: `${level}%` }
              : { width: 0 }
          }
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

/* =========================================================
   SKILLS PAGE
========================================================= */

function Skills() {
  /* Active Skill Category */
  const [active, setActive] =
    useState<Category>("Frontend");

  /* Show More / Show Less Tools */
  const [showAllTools, setShowAllTools] =
    useState(false);

  return (
    <>
      {/* =====================================================
          SKILLS SECTION
      ===================================================== */}

      <section className="section-shell">

        {/* Heading */}
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use."
          description="A collection of technologies and tools I use to build modern, responsive and interactive web experiences."
        />

        {/* ===================================================
            CATEGORY BUTTONS
        =================================================== */}

        <div className="mt-12 flex flex-wrap gap-4">
          {(Object.keys(categories) as Category[]).map(
            (cat) => (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  cursor-pointer
                  rounded-xl
                  bg-gradient-accent
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-primary-foreground
                "
              >
                {/* Active Background */}
                {active === cat && (
                  <motion.span
                    layoutId="skill-tab"
                    className="
                      absolute
                      inset-0
                      m-1
                      rounded-full
                      bg-black
                      text-white
                    "
                    transition={{
                      duration: 0.6,
                      ease: easeSoft,
                    }}
                  />
                )}

                {/* Button Text */}
                <span
                  className={`
                    relative
                    z-10
                    ${
                      active === cat
                        ? "text-white"
                        : "text-primary-foreground"
                    }
                  `}
                >
                  {cat}
                </span>
              </motion.button>
            )
          )}
        </div>

        {/* ===================================================
            SKILL PROGRESS SECTION
        =================================================== */}

        <div className="glass-panel mt-8 rounded-3xl p-8 sm:p-10">
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
              className="grid gap-8 sm:grid-cols-2"
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

        {/* ===================================================
            TOOLS
        =================================================== */}

        <StaggerGroup
          className="
            mt-16
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {(showAllTools
            ? tools
            : tools.slice(0, 10)
          ).map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={staggerChild}
              whileHover={{
                scale: 1.07,
                rotate: -3,
              }}
              transition={{
                duration: 0.35,
                ease: easeSoft,
              }}
              className="
                glass-panel
                flex
                flex-col
                items-center
                gap-3
                rounded-2xl
                px-4
                py-7
              "
            >
              <Icon
                size={22}
                className="text-primary"
              />

              <span
                className="
                  text-center
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-muted-foreground
                "
              >
                {label}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* ===================================================
            SHOW MORE / SHOW LESS
        =================================================== */}

        {/* {tools.length > 10 && (
          <div className="mt-8 flex justify-center">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setShowAllTools(
                  (prev) => !prev
                )
              }
              className="
                rounded-full
                border
                border-border
                bg-background/50
                px-6
                py-3
                text-sm
                font-medium
                transition-colors
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              {showAllTools
                ? "Show Less"
                : "Show More"}
            </motion.button>
          </div>
        )} */}
      </section>

      {/* =====================================================
          CV BUTTONS
      ===================================================== */}

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: easeSoft,
        }}
        className="
          m-2
          mb-15
          flex
          items-center
          justify-center
          gap-4
          flex-wrap
        "
      >
        {/* View CV */}
        <motion.a
          href="/ShahzaibShahid.pdf"
          target="_blank"
          rel="noopener noreferrer"
          transition={{
            duration: 0.2,
            ease: easeSoft,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            glass-panel
            flex
            items-center
            justify-center
            rounded-2xl
            bg-gradient-accent
            px-6
            py-4
            text-sm
            font-bold
            tracking-[1px]
            text-primary-foreground
          "
        >
          <h1>View CV</h1>
        </motion.a>

        {/* Download CV */}
        <motion.a
          href="/ShahzaibShahid.pdf"
          download
          transition={{
            duration: 0.2,
            ease: easeSoft,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            glass-panel
            flex
            items-center
            justify-center
            rounded-2xl
            bg-gradient-accent
            px-6
            py-4
            text-sm
            font-bold
            tracking-[1px]
            text-primary-foreground
          "
        >
          <h1>Download CV</h1>
        </motion.a>
      </motion.section>

      {/* =====================================================
          TECHNOLOGY MARQUEE
      ===================================================== */}

      <section className="overflow-hidden border-y border-border py-6">
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
            (m, i) => (
              <span
                key={`${m}-${i}`}
                className="
                  font-display
                  text-2xl
                  font-semibold
                  text-muted-foreground/50
                "
              >
                {m}{" "}
                <span className="text-accent">
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
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import {
  Reveal,
  SectionHeading,
  StaggerGroup,
  staggerChild,
  easeSoft,
} from "../components/motion-primitives";

function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({target: ref,offset: ["start end", "end start"],});

  const y = useTransform(scrollYProgress,[0, 1],[40, -40]);

  const aboutContent = [
    "I am a Full Stack Web Developer who builds modern, responsive, and user-friendly web applications. I specialize in creating clean frontend interfaces and reliable backend systems using React, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, and Tailwind CSS.",

    "My core skills include:",

    "• Frontend Development with React & TypeScript",

    "• Backend Development with Node.js & Express.js",

    "• REST API Development",

    "• PostgreSQL & Database Management",

    "• Authentication & Authorization",

    "• UI Development with Tailwind CSS Responsive Web Design",

    "• Git & GitHub",

    "• Clean, Organized, and Maintainable Code",

    "I focus on building complete web applications by connecting modern frontend interfaces with secure backend services and well-structured databases. I am constantly learning new technologies and improving my development skills to create efficient and scalable solutions.",

    "I value clear communication, attention to detail, meeting deadlines, and building solutions that match project requirements. My goal is to turn ideas into fast, functional, and polished full-stack web experiences.",
  ];

  const profileInfo = [
    ["From", "Pakistan, available remotely"],
    ["Focus", "Full Stack Development, UI & Web Applications"],
    [
      "Currently",
      "Building full-stack projects with React, Node.js, Express.js & PostgreSQL",
    ],
    ["Goal", "Building scalable and production-ready web applications"],
  ];

  const stats = [
    {
      to: 5,
      suffix: "+",
      label: "Web Projects",
    },
    {
      to: 8,
      suffix: "+",
      label: "Technologies",
    },
    {
      to: 3,
      suffix: "+",
      label: "Full-Stack Projects",
    },
    {
      to: 100,
      suffix: "%",
      label: "Passion for Development",
    },
  ];

  return (
    <>
      {/* About Heading */}
      <section className="section-shell ">
        <SectionHeading
          eyebrow="About"
          title="Building modern web experiences."
          description="A little more about me, my development journey, and the technologies I use to create modern web experiences."
        />

        {/* About Content */}
        <div className="mt-2 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <div
            ref={ref}
            className="relative"
          >
            <motion.div
              style={{ y }}
              className="relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1.5,
                }}
                transition={{
                  duration: 0.6,
                  ease: easeSoft,
                }}
                className="glass-panel overflow-hidden rounded-4xl p-2 mt-2">
                <img
                  src="/portrait.jpg"
                  alt="Portrait of Shahzaib Shahid"
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full rounded-[1.6rem] object-cover 
                  "/>
              </motion.div>

              {/* Glow */}
              <div className="blob -bottom-10 left-10 h-40 w-40 bg-accent" />
            </motion.div>
          </div>

          {/* About Text */}
          <div className="space-y-6 pt-15">
            {aboutContent.map((p, i) => (
              <Reveal
                key={`${p}-${i}`}
                delay={i * 0.01}
              >
                <p className="text-base leading-relaxed text-muted-foreground ">
                  {p}
                </p>
              </Reveal>
            ))}


          </div>
        </div>



            {/*  CV BUTTONS*/}
            <motion.section
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 20,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: easeSoft,
              }}
              className="m-2 mt-20 mb-25 flex flex-wrap items-center justify-center gap-4"
            >
      
              {/* View CV */}
              <motion.a
                href="/ShahzaibShahid.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="glass-panel flex items-center justify-center rounded-2xl bg-gradient-accent px-6 py-4 text-sm font-bold tracking-[1px] text-primary-foreground"
              >
                View CV
              </motion.a>
      
      
              {/* Download CV */}
              <motion.a
                href="/ShahzaibShahid.pdf"
                download
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="glass-panel flex items-center justify-center rounded-2xl bg-gradient-accent px-6 py-4 text-sm font-bold tracking-[1px] text-primary-foreground"
              >
                Download CV
              </motion.a>
            </motion.section>

            {/* Profile Information */}
            <Reveal delay={0.3}>
              <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-6
              rounded-4xl justify-center items-center
              ">
                {profileInfo.map(([key, value]) => (
                  <div key={key} 
                  className="border-t border-border backdrop-blur-xl p-5 glass-panel rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out justify-center items-center ">
                    <dt className="font-medium text-[15px] tracking-[0.2em] uppercase text-gradient">
                      {key}
                    </dt>
                    <dd className="mt-2 text-sm text-muted-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
      </section>

      {/* Statistics */}
      <section className="section-shell pt-10 sm:pt-14 lg:pt-16">
        <StaggerGroup
          className=" mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4
          ">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerChild}
              whileHover={{ y: -7 }}
              className="glass-panel flex w-full min-h-35 flex-col items-center justify-center rounded-2xl p-4 text-center sm:min-h-40 sm:rounded-3xl sm:p-6 lg:min-h-45 lg:p-8
              ">

              {/* Number */}
              <span className="text-gradient">
                <span
                  className="font-mono  text-3xl font-semibold sm:text-4xl lg:text-5xl
                  ">
                  {stat.to}
                  {stat.suffix}
                </span>
              </span>

              {/* Label */}
              <p
                className=" mt-3 text-center text-[9px] leading-4 tracking-[0.12em] uppercase text-muted-foreground sm:mt-4 sm:text-[10px] sm:tracking-[0.18em] lg:text-xs 
                lg:tracking-[0.2em]
                ">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}

export default About;
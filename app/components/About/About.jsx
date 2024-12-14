"use client";

import Image from "next/image";
import styles from "./about.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CgExternal } from "react-icons/cg";

export default function About() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleScroll = () => {
    requestAnimationFrame(() => {
      controls.start({ y: (window.scrollY - 500) * 0.03 });
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className={styles.section} id="about">
      <div className={styles.about}>
        <h2>About</h2>
        <div className={styles.grid}>
          <motion.picture animate={controls} initial={{ y: -50 }}>
            <Image
              src={"/media/ricardo.avif"}
              fill
              alt="Ricardo Guevara"
              title="Ricardo Guevara"
              quality={100}
            />
          </motion.picture>
          <div>
            <p>
              With a high school diploma in Computer Science and currently in my
              third year of the Software Engineering program at{" "}
              <a href="https://principal.url.edu.gt/" target="_blank">
                Rafael Landivar University <CgExternal />
              </a>
              I&apos;ve embarked on a journey that highlights my dedication to both
              structured and self-directed learning. Engaging in hands-on
              projects, I continuously broaden my understanding of the field,
              laying a strong foundation for my future career in software
              engineering.
            </p>
            <br />
            <p>
              My approach to learning and development is deeply influenced by
              professionals like Daniel Meja, a Software Lead Engineer at Telus
              International. His guidance has shaped my understanding of clean
              code practices, personal growth, and the pursuit of excellence in
              software engineering. Additionally, the insights I&apos;ve gained from
              Midudev have reinforced the importance of consistency in web
              technologies, adherence to best practices, and attention to detail
              in the development process.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

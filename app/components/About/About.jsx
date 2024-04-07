"use client";

import Image from "next/image";
import styles from "./about.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const handleScroll = () => {
    requestAnimationFrame(() => {
      controls.start({ y: (window.scrollY - 500) * 0.03});
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
          <motion.picture animate={controls} initial={{ y: -50}}>
            <Image
              src={"/media/ricardo.jpg"}
              fill
              alt="Ricardo Guevara"
              title="Ricardo Guevara"
              quality={100}
            />
          </motion.picture>
          <div>
            <p>
              With a Bachelor&apos;s Degree in Computer Science and currently in the
              third semester of the Software Engineering program at Rafael
              Landivar University, my journey demonstrates a dedication to both
              structured and self-directed learning. Engaging in hands-on
              projects, I consistently expand my understanding of the field,
              laying the groundwork for my future goals.
            </p>
            <br />
            <p>
              Inspired by Daniel Mejía, a Software Lead Engineer at Telus
              International, whose influence extends beyond coding principles to
              encompass clean code practices, personal growth, and the pursuit
              of excellence as a software engineer. From Midudev, I&apos;ve drawn
              inspiration to maintain consistency in web technologies, adhere to
              best practices, and appreciate the significance of small details
              in the development process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

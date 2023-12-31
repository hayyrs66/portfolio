"use client";

import styles from "./work.module.scss";
import { works } from "@/app/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";



export default function Work() {

  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const variants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
  }
  
  return (
    <section className={styles.section} id="project">
      <div className={styles.body}>
        <div className={styles.mainTitles}>
          <h2>PROJECT</h2>
          <h2>CATEGORY</h2>
        </div>
        {works.map((work, index) => (
          <Link
            key={index + "_project"}
            href={`/project/[id]`}
            as={`/project/${work.title.toLowerCase().replace(/\s+/g, "")}`}
          >
            <motion.div
              ref={ref}
              className={styles.project}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{work.title}</h3>
              <p>{work.category}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

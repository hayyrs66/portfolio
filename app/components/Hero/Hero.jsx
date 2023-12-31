"use client";
import Sketch from "@/app/threejs/sphere";
import styles from "./hero.module.scss";
import { Lora } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const lora = Lora({ subsets: ["latin"], weight: "400", style: "italic" });

export default function Hero() {
  const containerRef = useRef(null);
  const [sphere, setSphere] = useState(null);

  useEffect(() => {
    if (containerRef.current && !sphere) {
      const options = {
        dom: containerRef.current,
      };
      setSphere(new Sketch(options));
    }

    return () => {
      if (sphere) {
        sphere.stop();
      }
    };
  }, [sphere]);

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>FRONT-END WEB</h1>
        <h1>
          <span className={lora.className}>Developer</span>
        </h1>
      </div>

      <div ref={containerRef} className={styles.container} />
    </section>
  );
}

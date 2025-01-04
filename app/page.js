"use client";

import { About, Footer, Hero, Work, Preloader } from "./components";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const words = ["Hola", "Hallo", "Tere", "Olà", "やあ", "Hallå", "Guten tag", "Привіт"]

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={words} />}
      </AnimatePresence>
      <Hero/>
      <About />
      <Work />
      <Footer text="LET'S TALK" />
    </main>
  );
}

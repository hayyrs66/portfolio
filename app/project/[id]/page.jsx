"use client";

import { Button, Preloader } from "@/app/components";
import styles from "./project.module.scss";
import { works } from "@/app/constants";
import Image from "next/image";
import { NextProject } from "@/app/components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [isLoading, setIsLoading] = useState(true);
  
  // loading
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  }, []);
  
  // -- loading
  
  const { id } = params;
  
  const project = works.find((work) => {
    let fixedTitle = work.title.toLowerCase().replace(/\s+/g, "");
    
    return fixedTitle === id;
  });
  
  const words = [`${project.title}`];
  let numberOfProject = project.number;
  let content = {
    "--content": `"${project.number}"`,
  };

  if (!project) return <p>No encontrado</p>;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={words} />}
      </AnimatePresence>

      <article className={styles.section}>
        <h1 style={content}>{project.title}</h1>
        <div className={styles.grid}>
          <aside>
            <div>
              <h4>Rol</h4>
              <p>{project.category}</p>
            </div>
            <div>
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
            <div>
              <h4>Stack</h4>
              <div>
                {project.stack.map((item, index) => (
                  <p key={index + "_tecnology"}>{item}</p>
                ))}
              </div>
            </div>
            <Button />
          </aside>
          <main>
            <div>
              {project.src.map((url, index) => (
                <figure key={index + "_imageWork"}>
                  <Image
                    src={url}
                    fill
                    alt={project.title}
                    title={project.title}
                  />
                </figure>
              ))}
            </div>
            <p>{project.description}</p>
          </main>
        </div>
      </article>
      <NextProject params={params} />
    </>
  );
}

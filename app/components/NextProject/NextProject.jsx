import styles from "./next.module.scss";
import { works } from "@/app/constants";
import Link from "next/link";
import { Footer } from "..";
import { MdArrowOutward } from "react-icons/md";


export default function NextProject({ params }) {
  const { id } = params;

  const currentIndex = works.findIndex(
    (work) => work.title.toLowerCase().replace(/\s+/g, "") === id
  );

  if (currentIndex === -1) return <p>Proyecto no encontrado</p>;

  const nextIndex = (currentIndex + 1) % works.length;
  const nextProject = works[nextIndex];

  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <Link href={`/project/[id]`} as={`/project/${nextProject.title.toLowerCase().replace(/\s+/g, '')}`}>
          NEXT PROJECT
          <MdArrowOutward color="#dff2f2" />
        </Link>
        <h3>{nextProject.title}</h3>
      </div>
    </footer>
  );
}

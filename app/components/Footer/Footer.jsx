"use client";
import styles from "./footer.module.scss";
import { MdArrowOutward } from "react-icons/md";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <a href="mailto:correo.guevara@proton.me">
          {props.text}
          <MdArrowOutward color="#dff2f2" />
        </a>
      </div>
    </footer>
  );
}

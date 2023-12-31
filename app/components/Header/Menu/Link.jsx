import styles from "./menu.module.scss";
import { motion } from "framer-motion";
import { mountAnim, rotateX } from "../anim";
import Link from "next/link";

export default function LinkCustom({ data, index, closeMenu }) {
  const { title, description, href } = data;

  return (
    <motion.div
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <Link
        href={href}
        onClick={() => {
          closeMenu();
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
}

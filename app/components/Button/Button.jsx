"use client"

import styles from "./button.module.scss";
import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.a
      href="#"
      className={styles.button}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      Live site
    </motion.a>
  );
}

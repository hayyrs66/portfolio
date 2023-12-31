import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./menu.module.scss";
import Link from "./Link";
import { menu } from "@/app/constants";


export default function Menu({ closeMenu }) {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>
      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} closeMenu={closeMenu} />;
        })}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Burger from "./Burger/Burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs/Stairs";
import Menu from "./Menu/Menu";
import styles from "./header.module.scss";
import Time from "../Time/Time";
import Link from "next/link";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <span>&copy; Ricardo Guevara</span>
      </Link>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

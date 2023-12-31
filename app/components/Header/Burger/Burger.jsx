import styles from "./burger.module.scss";

export default function Burger({ openMenu }) {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className={styles.button}
    >
      <p>Menu</p>
    </div>
  );
}

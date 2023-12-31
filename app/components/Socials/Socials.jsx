import styles from "./socials.module.scss";

export default function Socials() {
  return (
    <footer className={styles.footer}>
      <a href="https://t.me/ricardotsx" target="_blank">
        Telegram
      </a>
      <a href="https://github.com/hayyrs66" target="_blank">
        Github
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=50250689418&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        WhatsApp
      </a>
    </footer>
  );
}

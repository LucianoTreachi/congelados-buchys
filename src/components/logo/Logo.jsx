import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.box}>
      <img
        className={styles.logoImage}
        src={logo}
        alt="Logo: Congelados Buchys"
        width={306}
        height={214}
      />
      <span className={styles.logoText}>
        Congelados <br /> Buchys
      </span>
    </div>
  );
}

import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <img
        className={styles.logoImage}
        src={logo}
        alt="Logo: Congelados Buchys"
        width={306}
        height={214}
      />
    </div>
  );
}

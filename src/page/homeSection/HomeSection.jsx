import burgerImage from "../../assets/burger.png";
import meatImage from "../../assets/meat.png";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.primaryTitle}>Congelados Buchys</h1>
        <h2 className={styles.secondaryTitle}>
          Distribuidor mayorista y minorista. Ofrecemos una amplia gama de
          productos.
        </h2>
        <span className={styles.paragraph}>¡Envío sin cargo!</span>
      </div>
      <img
        className={styles.burgerImage}
        src={burgerImage}
        alt=""
        width={512}
        height={512}
      />
      <img
        className={styles.meatImage}
        src={meatImage}
        alt=""
        width={512}
        height={512}
      />
    </section>
  );
}

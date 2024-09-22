import burgerImage from "../../../../assets/burger.png";
import meatImage from "../../../../assets/meat.png";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.primaryTitle}>Productos Congelados</h1>
        <h2 className={styles.secondaryTitle}>
          Distribuidor Mayorista y Minorista. Ofrecemos una amplia gama de
          productos.
        </h2>
        <h3 className={styles.tertiaryTitle}>
          Hamburguesas, Lomos, Milanesas, Albóndigas, Patitas, Empanadas chinas,
          Panificación, Papas, Postres.
        </h3>
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

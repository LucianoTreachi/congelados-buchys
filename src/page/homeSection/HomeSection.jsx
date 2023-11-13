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
        <p className={styles.paragraph}>¡Envío sin cargo!</p>
      </div>
      <img
        className={styles.burgerImage}
        src={burgerImage}
        alt="Imagen de hamburguesa que se ve en el fondo"
      />
      <img
        className={styles.meatImage}
        src={meatImage}
        alt="Imagen de carne que se ve en el fondo"
      />
    </section>
  );
}

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          © Congelados Buchys
          <br />
          <br />
          <span>
            Más de 20 años de experiencia especializándonos en productos
            congelados.
          </span>
        </p>
      </div>
    </footer>
  );
}

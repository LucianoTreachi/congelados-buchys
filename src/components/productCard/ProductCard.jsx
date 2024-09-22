import ContactButton from "../buttons/contactButton/ContactButton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          className={styles.cardImage}
          src={product.image}
          alt=""
          width={960}
          height={540}
          loading="lazy"
        />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <h4 className={styles.cardSubtitle}>{product.subtitle}</h4>
        <div className={styles.content}>{product.description}</div>
        <ContactButton
          ariaLabel={`Consultar por el producto ${product.title}`}
        />
      </div>
    </div>
  );
}

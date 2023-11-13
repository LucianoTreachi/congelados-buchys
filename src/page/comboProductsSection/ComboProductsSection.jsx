import { dataComboProducts } from "../../data/dataComboProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import markerImage from "../../assets/marker.svg";
import ContactButton from "../../components/buttons/contactButton/ContactButton";
import styles from "./ComboProductsSection.module.css";

export default function ComboProductsSection() {
  return (
    <Section>
      <div className={styles.container}>
        <TitleSection content="Combos para Fiestas y Eventos" />
        <img
          className={styles.marker}
          src={markerImage}
          alt="Subrayado de título"
        />
        <div className={styles.row}>
          {dataComboProducts.map((product) => (
            <div className={styles.card} key={product.id}>
              <span className={styles.category}>{product.category}</span>
              <img
                className={styles.cardImage}
                src={product.image}
                alt="Imagen de producto"
              />
              <div className={styles.cardTitles}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <h4 className={styles.cardSubtitle}>{product.subtitle}</h4>
              </div>
              <div className={styles.content}>{product.description}</div>
              <ContactButton />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

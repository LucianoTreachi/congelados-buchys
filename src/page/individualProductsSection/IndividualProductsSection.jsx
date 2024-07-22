import { dataIndividualProducts } from "../../data/dataIndividualProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ContactButton from "../../components/buttons/contactButton/ContactButton";
import styles from "./IndividualProductsSection.module.css";

export default function IndividualProductsSection() {
  return (
    <Section>
      <div className={styles.container}>
        <TitleSection content="Productos Individuales para sumar" />
        <TitleMarker />
        <div className={styles.row}>
          {dataIndividualProducts.map((product) => (
            <div className={styles.card} key={product.id}>
              <div className={styles.top}>
                <img
                  className={styles.cardImage}
                  src={product.image}
                  alt="Imagen de producto"
                  width={960}
                  height={540}
                  loading="lazy"
                />
              </div>
              <div className={styles.bottom}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <h4 className={styles.cardSubtitle}>{product.subtitle}</h4>
                <div className={styles.content}>{product.description}</div>
                <ContactButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

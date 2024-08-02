import { dataGastronomicProducts } from "../../data/dataGastronomicProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ContactButton from "../../components/buttons/contactButton/ContactButton";
import styles from "./GastronomicProductsSection.module.css";

export default function GastronomicProductsSection() {
  return (
    <Section>
      <div className={styles.container}>
        <TitleSection content="Productos para el Rubro Gastronómico" />
        <TitleMarker />
        <div className={styles.row}>
          {dataGastronomicProducts.map((product) => (
            <div className={styles.card} key={product.id}>
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
                <ContactButton ariaLabel={`Consultar por el producto ${product.title}`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

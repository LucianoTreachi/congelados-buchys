import { dataComboProducts } from "../../data/dataComboProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./ComboProductsSection.module.css";

export default function ComboProductsSection() {
  return (
    <Section id="combo-products">
      <div className={styles.container}>
        <TitleSection content="Combos para Fiestas y Eventos" />
        <TitleMarker />
        <div className={styles.row}>
          {dataComboProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

import { dataPotatoProducts } from "../../data/dataPotatoProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./PotatoProductsSection.module.css";

export default function PotatoProductsSection() {
  return (
    <Section id="potato-products">
      <div className={styles.container}>
        <TitleSection content="Papas" />
        <TitleMarker />
        <div className={styles.row}>
          {dataPotatoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

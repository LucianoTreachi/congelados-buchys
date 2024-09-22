import { dataBreadsProducts } from "../../../../data/dataBreadsProducts";
import Section from "../../../../components/section/Section";
import TitleSection from "../../../../components/titleSection/TitleSection";
import TitleMarker from "../../../../components/titleMarker/TitleMarker";
import ProductCard from "../../../../components/productCard/ProductCard";
import styles from "./ProductSections.module.css";

export default function BreadsProductsSection() {
  return (
    <Section id="breads-products">
      <div className={styles.container}>
        <TitleSection content="Panes" />
        <TitleMarker />
        <div className={styles.row}>
          {dataBreadsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

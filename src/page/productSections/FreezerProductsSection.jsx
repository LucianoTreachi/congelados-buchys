import { dataFreezerProducts } from "../../data/dataFreezerProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./ProductSections.module.css";

export default function FreezerProductsSection() {
  return (
    <Section id="freezer-products">
      <div className={styles.container}>
        <TitleSection content="Productos en Cantidad para tu Familia" />
        <TitleMarker />
        <div className={styles.row}>
          {dataFreezerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

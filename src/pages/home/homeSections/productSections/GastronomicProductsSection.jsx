import { dataGastronomicProducts } from "../../../../data/dataGastronomicProducts";
import Section from "../../../../components/section/Section";
import TitleSection from "../../../../components/titleSection/TitleSection";
import TitleMarker from "../../../../components/titleMarker/TitleMarker";
import ProductCard from "../../../../components/productCard/ProductCard";
import styles from "./ProductSections.module.css";

export default function GastronomicProductsSection() {
  return (
    <Section id="gastronomic-products">
      <div className={styles.container}>
        <TitleSection content="Productos para el Rubro Gastronómico" />
        <TitleMarker />
        <div className={styles.row}>
          {dataGastronomicProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

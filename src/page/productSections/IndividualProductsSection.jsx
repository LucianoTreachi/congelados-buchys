import { dataIndividualProducts } from "../../data/dataIndividualProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./ProductSections.module.css";

export default function IndividualProductsSection() {
  return (
    <Section id="individual-products">
      <div className={styles.container}>
        <TitleSection content="Productos Individuales para sumar" />
        <TitleMarker />
        <div className={styles.row}>
          {dataIndividualProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

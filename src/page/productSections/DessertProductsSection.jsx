import { dataDessertProducts } from "../../data/dataDessertProducts";
import Section from "../../components/section/Section";
import TitleSection from "../../components/titleSection/TitleSection";
import TitleMarker from "../../components/titleMarker/TitleMarker";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./ProductSections.module.css";

export default function DessertProductsSection() {
  return (
    <Section id="dessert-products">
      <div className={styles.container}>
        <TitleSection content="Deliciosos Postres" />
        <TitleMarker />
        <div className={styles.row}>
          {dataDessertProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

import MenuButton from "../../components/buttons/menuButton/MenuButton";

/* Home Sections */
import HeroSection from "./homeSections/heroSection/HeroSection";
import InfoSection from "./homeSections/infoSection/InfoSection";
import BreadsProductsSection from "./homeSections/productSections/BreadsProductsSection";
import ComboProductsSection from "./homeSections/productSections/ComboProductsSection";
import FreezerProductsSection from "./homeSections/productSections/FreezerProductsSection";
import IndividualProductsSection from "./homeSections/productSections/IndividualProductsSection";
import GastronomicProductsSection from "./homeSections/productSections/GastronomicProductsSection";
import PotatoProductsSection from "./homeSections/productSections/PotatoProductsSection";
import DessertProductsSection from "./homeSections/productSections/DessertProductsSection";

export default function Home() {
  return (
    <main>
      <MenuButton />
      <HeroSection />
      <InfoSection />
      <ComboProductsSection />
      <FreezerProductsSection />
      <IndividualProductsSection />
      <GastronomicProductsSection />
      <BreadsProductsSection />
      <PotatoProductsSection />
      <DessertProductsSection />
    </main>
  );
}

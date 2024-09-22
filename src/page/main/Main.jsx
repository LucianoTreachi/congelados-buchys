import MenuButton from "../../components/buttons/menuButton/MenuButton";

import Hero from "../hero/Hero";
import Info from "../info/Info";

import ComboProductsSection from "../productSections/ComboProductsSection";
import FreezerProductsSection from "../productSections/FreezerProductsSection";
import IndividualProductsSection from "../productSections/IndividualProductsSection";
import GastronomicProductsSection from "../productSections/GastronomicProductsSection";
import BreadsProductsSection from "../productSections/BreadsProductsSection";
import PotatoProductsSection from "../productSections/PotatoProductsSection";
import DessertProductsSection from "../productSections/DessertProductsSection";

export default function Main() {
  return (
    <main>
      <MenuButton />
      <Hero />
      <Info />
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

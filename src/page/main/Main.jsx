import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

import HomeSection from "../homeSection/HomeSection";
import InfoSection from "../infoSection/InfoSection";

import ComboProductsSection from "../comboProductsSection/ComboProductsSection";
import FreezerProductsSection from "../freezerProductsSection/FreezerProductsSection";
import IndividualProductsSection from "../individualProductsSection/IndividualProductsSection";
import GastronomicProductsSection from "../gastronomicProductsSection/GastronomicProductsSection";
import PotatoProductsSection from "../potatoProductsSection/PotatoProductsSection";
import DessertProductsSection from "../dessertProductsSection/DessertProductsSection";

export default function Main() {
  return (
    <main>
      <ScrollToTop />
      <HomeSection />
      <InfoSection />
      <ComboProductsSection />
      <FreezerProductsSection />
      <IndividualProductsSection />
      <GastronomicProductsSection />
      <PotatoProductsSection />
      <DessertProductsSection />
    </main>
  );
}

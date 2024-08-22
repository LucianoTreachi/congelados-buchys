import Menu from "../../components/buttons/menu/Menu";

import HomeSection from "../homeSection/HomeSection";
import InfoSection from "../infoSection/InfoSection";

import ComboProductsSection from "../comboProductsSection/ComboProductsSection";
import FreezerProductsSection from "../freezerProductsSection/FreezerProductsSection";
import IndividualProductsSection from "../individualProductsSection/IndividualProductsSection";
import GastronomicProductsSection from "../gastronomicProductsSection/GastronomicProductsSection";
import BreadsProductsSection from "../breadsSection/BreadsProductsSection";
import PotatoProductsSection from "../potatoProductsSection/PotatoProductsSection";
import DessertProductsSection from "../dessertProductsSection/DessertProductsSection";

export default function Main() {
  return (
    <main>
      <Menu />
      <HomeSection />
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

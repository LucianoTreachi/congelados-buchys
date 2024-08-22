import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleSelectVisibility = () => {
    setIsSelectVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsSelectVisible(false);
    }
  };

  const handleSelectChange = (event) => {
    const sectionId = event.target.value;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsSelectVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={menuRef} className={styles.containerMenu}>
        <button
          className={styles.button}
          aria-label="Menú"
          onClick={toggleSelectVisibility}
        >
          Menu
        </button>
        {isSelectVisible && (
          <select
            className={styles.select}
            aria-label="Categoría de productos"
            onChange={handleSelectChange}
          >
            <option value="combo-products">Combos</option>
            <option value="freezer-products">En cantidad</option>
            <option value="individual-products">Individuales</option>
            <option value="gastronomic-products">Gastronómico</option>
            <option value="breads-products">Panes</option>
            <option value="potato-products">Papas</option>
            <option value="dessert-products">Postres</option>
          </select>
        )}
      </div>
    </>
  );
};

export default Menu;

import { useEffect, useRef, useState } from "react";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
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

  const handleLinkClick = (sectionId) => {
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
          className={styles.menuButton}
          aria-label="Menú"
          onClick={toggleSelectVisibility}
        >
          Menu
        </button>
        {isSelectVisible && (
          <div className={styles.list}>
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("combo-products")}
            >
              Combos
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("freezer-products")}
            >
              En cantidad
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("individual-products")}
            >
              Individuales
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("gastronomic-products")}
            >
              Gastronómico
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("breads-products")}
            >
              Panes
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("potato-products")}
            >
              Papas
            </button>
            <hr />
            <button
              className={styles.listButton}
              onClick={() => handleLinkClick("dessert-products")}
            >
              Postres
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuButton;

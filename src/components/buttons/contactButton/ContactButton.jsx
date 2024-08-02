import styles from "./ContactButton.module.css";

export default function ContactButton({ariaLabel}) {  
  console.log(ariaLabel)
  return (
    <a
      className={styles.button}
      href="https://api.whatsapp.com/send?phone=3516747745&text=¡Hola Congelados Buchys!"
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
    >
      Consultar por este producto
      <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </a>
  );
}

import markerImage from "../../assets/marker.svg";
import styles from "./TitleMarker.module.css";

export default function TitleMarker() {
  return (
    <img
      className={styles.marker}
      src={markerImage}
      alt=""
      width={120}
      height={56}
    />
  );
}

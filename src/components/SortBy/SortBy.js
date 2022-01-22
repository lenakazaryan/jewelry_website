import styles from "../SortBy/SortBy.module.css";
// import logo from "../../assets/images/fb.png";

function SortBy({ style }) {
  return (
    <div style={style}>
      <ul className={styles.listContainer}>
        <li>Rec</li>
        <li>New</li>
        <li>Arrival</li>
      </ul>
    </div>
  );
}

export default SortBy;

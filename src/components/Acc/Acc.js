import styles from "./Acc.module.css";
import Row1 from "./Row1/Row1";
import Row2 from "./Row2/Row2";
import Row3 from "./Row3/Row3";
import Row4 from "./Row4/Row4";
function Acc() {
  return (
      <div className={styles.AccMain}>
          <Row1 />  
          <Row2 />
          <Row3 />
          <Row4 />
      </div>
  )
}

export default Acc;
